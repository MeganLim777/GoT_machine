import cv2
try:
    from PIL import Image
except ImportError:
    import Image
import pytesseract
import numpy as np


# Reading the image using opencv
img = cv2.imread('/Users/meganlim/Downloads/118143812_3447409508656334_1956187958706443010_n.png')

# Rescale the image, to be able to read the smaller words
img = cv2.resize(img, None, fx=2, fy=2, interpolation=cv2.INTER_CUBIC)

# Convert colour image to grayscale image
grayscale = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)


# Applying a Simple Threshold to make the image purely black or white.
# If pixel value is greater than 127 (the threshold), then change pixel to black.
# If pixel value is less than 127 (the threshold), then change pixel to white.
grayscale, img_bin = cv2.threshold(grayscale,127,255,cv2.THRESH_BINARY)

# Turning every white pixel to black,
# and every black pixel to white.
grayscale = cv2.bitwise_not(img_bin)


# Apply dilation and erosion to remove some noise around the characters
kernal = np.ones((2, 1), np.uint8)
img = cv2.erode(grayscale, kernal, iterations=1)
img = cv2. dilate(img, kernal, iterations=1)

# Convert the words in the image to string
result = pytesseract.image_to_string(img)

print(result)

#Testing this line by itself to test the pytesseract
#print(pytesseract.image_to_string(Image.open('/Users/meganlim/Downloads/118143812_3447409508656334_1956187958706443010_n.png')))

# Resources used:
# Website 1: https://towardsdatascience.com/optical-character-recognition-ocr-with-less-than-12-lines-of-code-using-python-48404218cccb
# Website 2: https://www.freecodecamp.org/news/getting-started-with-tesseract-part-ii-f7f9a0899b3f/

# Initially just copy and pasted the code in Website 1.
# Then used Webiste 2 to understand the code and put in comments.
# Also used Website 2 to refine the code to make it better, e.g. the resizing the image and changing
# the threshold from 128 (from Website 1) to 127.
