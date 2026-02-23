import eel
from engine.features import *

eel.init('www')


playAssistantSound() 

eel.start('index.html', mode='edge', host='localhost', port=8000, block=True)