
import csv
import numpy
import requests


file_name = "education.csv"
file_object = open(file_name,"r")
data = numpy.array([row for row in csv.reader(file_object)])
data = data[1:]
sample_index = numpy.random.choice(len(data),len(data)/100) #0.01
sample_data = data[sample_index]

f = open("sample.csv","w")
for row in sample_data:
    f.write(",".join(row))
    f.write("\n")
f.close()