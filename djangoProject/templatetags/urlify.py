from django import template

register = template.Library()

@register.filter
def normalyse_feat(value):
    if value :
        value = 'ft-'+value.replace(', ','-')
    return value