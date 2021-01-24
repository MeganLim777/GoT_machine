import cv2
import pytesseract
import numpy as np

pytesseract.pytesseract.tesseract_cmd = '/usr/local/bin/tesseract'

# Reading the image
img = cv2.imread('testPremiumScene.png')

##### Trying to make the image clearer ####

# Rescale the image, to be able to read the smaller words
img = cv2.resize(img, None, fx=3, fy=3, interpolation=cv2.INTER_CUBIC)

# Converting the image to grayscale
grayscale = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)


# Applying a Simple Threshold to make the image purely black or white.
# If pixel value is greater than 127 (the threshold), then change pixel to black.
# If pixel value is less than 127 (the threshold), then change pixel to white.
grayscale, img_bin = cv2.threshold(grayscale,127,255,cv2.THRESH_BINARY_INV)


# Converting the image from BGR to RGB because
# opencv uses BGR while pytesseract needs RGB.
img = cv2.cvtColor(img_bin, cv2.COLOR_GRAY2RGB)

print(pytesseract.image_to_string(img))
