# GoT_machine
Personal project for an API that does automated data detection from images


## What is the problem that I'm trying to solve
I'm a big fan of an online game called Gardens of Time, and every month there is a Trivia quiz where they will ask a question
and pick 5 random winners (who have answered the question correctly) to win a prize in the game.

The answers to the questions are somewhere in the game.
However, the game is played in chapters; and there **over 400 chapters** with more to come.
If I was to go into the game every time a Trivia question comes out, I may have to press a lot of buttons just to get to the 250th Chapter for example.
I could initially spend some time writing down the data from each chapter, but due to the fact that I have to click several times in order to 
get all the data per chapter, it means that I have to **spend some time recording the data per chapter**.
I also don't want to be in the game for too long because it **heavily uses my CPU** and it gets hot very quickly.

So although manually recording this data is very simple, it is **time-consuming and a time-waster**. I much rather do something more productive.
So I thought that I can build an API that automates the data recording!

## What is the overall end product that I want to achieve
Something that will allow me to easily log the data from all the chapters into the excel spreadsheets that I have prepared.
Then when the monthly Trivia question comes, I can just pull out the appropriate spreadsheet and answer the question.

## What product I have developed as of now
I tried to build an API that will allow me to:

    1) Upload a screenshot of a chapter/pageOfTheGame from the client side and into my AWS S3 bucket.
    
    2) Call an AWS Lambda function to get the uploaded image. Then the Lambda function uses OpenCV and Tesseract to 
       produce an array of box dimensions that surround each word in the image.
       
    3) Give the array of box dimensions to another Lambda function which contains a trained model using Tensorflow to 
       choose the correct box dimensions that contains the correct words that we want to record down. This Lambda 
       function should produce a string with the recorded information and send it back to the client side.
       
    4) Back at the client side, it will process the received string and display it to the user. The user will then
       check to ensure that the correct data is captured and can make small correction changes if needed.
       
    5) The user can then press a button and the information will be saved into one of the pre-prepared spreadsheets.
    
    
However, in the process of coding the python file for the Lambda function in Step 2),
I realised that the game uses a font that looks like Times New Roman (a Serif font), while I think that an untrained Tesseract is mostly able to only read
san-serif font.
Upon further research, I found out that I will have to train Tesseract to read my desired font. This is something that I'm defintely open to, if I had more time.
But currently, I have a personal goal to finish this product before the end of Feb 2021, 
and at this stage I don't think I can finish it using this approach; which brings us to the next section.

## Next steps: A new approach
I thought of another way that I could still solve my problem by:

  1) Creating an API or an app that connects the client side of my phone to the client side of my computer.
  
  2) Then taking advantage of the voice-to-text feature that now comes with most modern phones, say the desired words into 
    my phone which will convert it into text. (Speaking is faster than typing)
    
  3) Tweak the data if needed and send the data over to the computer's client side.
  
  4) Copy the data from the computer's API or app and put it into my spreadsheet.


## Final thoughts
The new approach is yet to be implmented.
But I'm happy with all the research that I've done with the previous approach
and all the code that I have done so far using the old approach is in this repo.
I still have the bookmarks for this research that I can go back to any time and I've gained a lot of expereience writing this code and playing around with
OpenCV, Tesseract and AWS basics.

Thanks for taking the time to read this. :)
      
