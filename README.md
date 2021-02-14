# Meeting calendar planner  

![Technology](technology.png)


## Starting the app

### Description

This calendar  is created for your accurate meeting planning within work or personal appointments.
It gives several options for an event creation/ choosing participants/ deleting an event/ filtering by names.

### Setting up 

* To start working with the app on your computer, you should first clone/download the repository from GitHub

```shell
git clone https://github.com/TanyaChichkan/Calendar
```

Move to the project's folder and run the following command to install all the dependencies.

```shell
npm install
```

Afterwards, start the app on the server.

```shell
npm start
```

* To run the app from the browser, follow the link https://tanyachichkan.github.io/Calendar/

Follow the link in your browser
[http://localhost:4040](http://localhost:4040).

### General information

The planner looks like a schedule in the form of a table, containing time slots (from 10:00 to 18:00) and weekdays (from Mon to Sun).
The scheduler is empty, as you first start working with it. Once the time slot with certain time and day is booked, it'll be shown in
the table as a green colored cell. There is also a button for a meeting creation and a filter with a possibility to filter the 
events by participants.


### Generating an event
To generate a new event, press the button "New event+" from the top right corner. Afterwards, you'll be able to see a window for a meeting creation. All the fields have to be completed ("Day","Time","Participants","Name of the event"). The first three options 
are to be chosen from the list. Name of the event is typed manually. Type the name carefully, as once it's saved, you'll have no possibility to edit it, except for its deletion and adding a new one. 

For successful event creation, all the fields must be completed, otherwise, you'll see a notification in red, informing that some fields were missed.

If you choose a time slot and a day, already booked, you'll see a notification with the following text "Failed to create an event.
Time slot is already booked", meaning you have to choose another day and time option.


### Saving an event
To save the event, press the button "Create". If "Cancel" button is pressed or the icon of cross(in the right top corner of the form, the window is closed, and no meeting is saved. You'll be redirected back to the main page. 

If the meeting was generated, it'll be added to the schedule table, withe event's name (from "Name of the event") and a cross-icon, giving a possibility for its further deletion.


### Event deletion
On the main page with the table and all the meetings planned, press a cross-icon on the corresponding event you want to delete.
If the meeting is to be deleted, in the window ("Are you sure you want to delete an "...." event?") press "Yes", then it'll be removed from the scheduler, with no possibility to restore it again, except for creating a new one. If "No" is pressed, no
changes are made in the planner, and all the following events are saved.


### Filtering by name
If you want all the meetings to be sorted by their participants, in the right top corner of the main page, use the filter named "Select participants". Choose a name from the list, and the table will show only the meetings with a corresponding participant 
involved. While "All members" option is chosen from the list, the table demonstrates all the meetings booked.

