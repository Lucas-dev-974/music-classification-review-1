import os
import hug


@hug.get('/')
def root():
    return 'Welcome home!'

@hug.response_middleware()
def process_data(request, response, resource):
      response.set_header('Access-Control-Allow-Origin', '*')
      
@hug.post("/upload")
def upload(body):
    """Accepts file uploads"""
    
    # Get the filename and content from the request
    filename = list(body.keys()).pop()
    file_content = list(body.values()).pop()

    # Specify the directory where you want to save the uploaded files
    upload_directory = "./"

    # Combine the directory path and filename
    file_path = os.path.join(upload_directory, filename + ".mp3")

    # Write the file to the server
    with open(file_path, "wb") as file:
        file.write(file_content)

    return {"filename": filename, "filesize": len(file_content), "status": "File saved successfully"}