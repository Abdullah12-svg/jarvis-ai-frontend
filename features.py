from playsound import playsound

def playAssistantSound():
    
    music_dir = r"www\assets\vends\texllate\audio\HUD Activation Sound Effect.mp3"
    try:
        playsound(music_dir)
    except Exception as e:
        print(f"Error playing sound: {e}")