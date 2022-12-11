library(haven)

# read the data into a data table, X2011HSE
X2011HSE <- read_sav("/Users/gini/Google Drive/My Drive/01-Self/UoE/RProjects/datafiles/HSE2011.sav")

# using package na.tools replace all NA with 0
library(na.tools)
X2011HSE[is_na(X2011HSE)]=0
print(X2011HSE)

# using the dplyr library for further features
library(dplyr)

# convert to local data frame for easy processing
alcohol_usages <- as_tibble(X2011HSE)

# select specific columns (sex, age, top qualification, total units, marital status, house size, bmi and region)
usages <- select(alcohol_usages, Sex, Age, topqual3, totalwu, marstatc, HHSize, bmival, gor1, htval, wtval)
print(usages)

# total sample
total_sample <- nrow(usages)
print(total_sample)

# percentage of people who drink alcohol

# 1. get data frame for people who drink alcohol
drinks_alcohol <- filter(select(usages,Sex, Age, topqual3, totalwu, marstatc, HHSize, bmival, gor1, htval, wtval),totalwu>0)

print(drinks_alcohol)

# 2. total number of people who drink alcohol
total_drink_alcohol <- nrow(drinks_alcohol)
print(total_drink_alcohol)

# 3. percent who drink alcohol
percent_drink_alcohol <- (total_drink_alcohol / total_sample) * 100
print(percent_drink_alcohol)

# 4. total number of males (1) who drink alcohol
total_males_drink_alcohol <- nrow(filter(select(drinks_alcohol,totalwu, Sex),Sex==1))
print(total_males_drink_alcohol)

# 5. percent of males who drink alcohol
percent_males_drink_alcohol <- (total_males_drink_alcohol / total_sample) * 100
print(percent_males_drink_alcohol)

# 6. total number of females (2) who drink alcohol
total_females_drink_alcohol <- nrow(filter(select(drinks_alcohol,totalwu, Sex),Sex==2))
print(total_females_drink_alcohol)

# 7. percent of females who drink alcohol
percent_females_drink_alcohol <- (total_females_drink_alcohol / total_sample) * 100
print(percent_females_drink_alcohol)

# 8. total number of highest qualified drinking
# Numeric Label
# -1      Not applicable
# 1       NVQ4/NVQ5/Degree or equiv
# 2       Higher ed below degree
# 3       NVQ3/GCE A Level equiv
# 4       NVQ2/GCE O Level equiv
# 5       NVQ1/CSE other grade equiv
# 6       Foreign/other
# 7       No qualification 
# Assuming 1 as the highest qualification
total_qualified_drink_alcohol <- nrow(filter(select(drinks_alcohol,totalwu, topqual3),topqual3==1))
print(total_qualified_drink_alcohol)

# 9. percent of qualified who drink alcohol
percent_qualified_drink_alcohol <- (total_qualified_drink_alcohol / total_sample) * 100
print(percent_qualified_drink_alcohol)

# 10. total number of divorced and separated drinking 
# Numeric Label
# -9      Refused
# -1      Not applicable
# 1       Single
# 2       Married
# 3       Civil partnership including spontaneous answers
# 4       Separated
# 5       Divorced
# 6       Widowed
# 7       Cohabitees
total_divorced_drink_alcohol <- nrow(filter(select(drinks_alcohol,totalwu, marstatc),marstatc==5))
print(total_divorced_drink_alcohol)

percent_divorced_drink_alcohol <- (total_divorced_drink_alcohol / total_sample) * 100
print(percent_divorced_drink_alcohol)

total_separated_drink_alcohol <- nrow(filter(select(drinks_alcohol,totalwu, marstatc),marstatc==4))
print(total_separated_drink_alcohol)

percent_separated_drink_alcohol <- (total_separated_drink_alcohol / total_sample) * 100
print(percent_separated_drink_alcohol)

# 11. mean, median, mode, min, max, range sd for household size, bmi, age

# using drinks alcohol data, filter out the 0 values
dataset <- filter(select(drinks_alcohol,Sex, Age, topqual3, totalwu, marstatc, HHSize, bmival),Age>0)
dataset <- filter(select(dataset,Sex, Age, topqual3, totalwu, marstatc, HHSize, bmival),HHSize>0)
dataset <- filter(select(dataset,Sex, Age, topqual3, totalwu, marstatc, HHSize, bmival),bmival>0)
print(dataset)


# mean
print(mean(dataset$HHSize))
print(mean(dataset$bmival))
print(mean(dataset$Age))

# median
print(median(dataset$HHSize))
print(median(dataset$bmival))
print(median(dataset$Age))

# mode
library(modeest)
print(mlv(dataset$HHSize, method = "mfv"))
print(mlv(dataset$bmival, method = "mfv"))
print(mlv(dataset$Age, method = "mfv"))

# min
print(min(dataset$HHSize))
print(min(dataset$bmival))
print(min(dataset$Age))

# max
print(max(dataset$HHSize))
print(max(dataset$bmival))
print(max(dataset$Age))

# range
print(range(dataset$HHSize))
print(range(dataset$bmival))
print(range(dataset$Age))

# sd
print(sd(dataset$HHSize))
print(sd(dataset$bmival))
print(sd(dataset$Age))

# chi test for sex vs drinking status
df <- usages %>%
  mutate(drinks=ifelse(usages$totalwu>0,1,2))
df
chisq.test(df$drinks,df$Sex, correct=FALSE)

# chi test for regions vs drinking status
chisq.test(drinks_alcohol$gor1,drinks_alcohol$totalwu, correct=FALSE)

# t-test between gender and height
t.test(usages$Sex,usages$htval)

# t-test between gender and weight
t.test(usages$Sex,usages$wtval)

