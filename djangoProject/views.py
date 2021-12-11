from django.http import HttpResponse
from django.shortcuts import render
from django.db import connections
from django.template.loader import get_template, render_to_string
from django import template

def index(request):
    message = "Salut tout le monde !"
    return HttpResponse(message)



def search(request):
    #price_lte = request.GET
    # body = [
    #     {'title' : 'First Post', 'body' : 'z'},
    #     {'title': 'First Post', 'body': 'a'},
    # ]

    c = connections['default'].cursor()
    c.execute("""
        SELECT
            musiques.titre,
            artistes.nom,
            musiques.featuring,
            types.nom
        FROM
            musiques
        INNER JOIN artistes ON musiques.artiste_id = artistes.id 
        INNER JOIN albums   ON musiques.album_id = albums.id
        INNER JOIN types    ON musiques.type_id = types.id;    
    """)
    rows = c.fetchall()

    print(rows[0])

    body = render_to_string('pages/search.html', {'querry_musiques':rows})

    return render(request, 'blueunicorn_tailwind/pannel.html', {'body':body})