import ICAL from "./ical.min.js";

export class FetchError extends Error {
  constructor(message) {
    super(message);
    this.name = "FetchError";
  }
}

export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

export class CreationError extends Error {
  constructor(message) {
    super(message);
    this.name = "CreationError";
  }
}

export default class GCalendarFetcher {
  constructor(options) {
    this.url = options.url;
    this.amountOfPastEvents = options.amountOfPastEvents;
    this.dateTime = luxon.DateTime;
  }

  async fetchEvents() {
    let response;
    try {
      response = await fetch(this.url);
    } catch (e) {
      throw new FetchError("Failed to fetch calendar events. Error: " + e);
    }

    if (!response.ok) {
      throw new FetchError(
        "Failed to fetch calendar events. Status: ${response.status}. Please check the URL or CORS errors."
      );
    }

    const icsData = await response.text();
    return this.parseIcsData(icsData);
  }

  parseIcsData(jcalData) {
    try {
      //const jcalData = ICAL.parse(icsData);
      //const comp = new ICAL.Component(jcalData);
      const vevents = []; //comp.getAllSubcomponents("vevent");
      const calJson = JSON.parse(jcalData);
      for (const key in calJson) {
        if (calJson[key].type == "VEVENT") {
          //console.log("VEVENT found: " + calJson[key].summary);
          vevents.push(calJson[key]);
        }
      }

      const events = vevents.map((vevent) => {
        return this.createEvent(vevent);
      });
      if (this.amountOfPastEvents === -1) {
        return events.sort((a, b) => a.startDate - b.startDate);
      }

      /*
      const pastEvents = events
        .filter((event) => event.endDate < this.dateTime.now())
        .sort((a, b) => b.endDate - a.endDate)
        .slice(0, this.amountOfPastEvents);
      const futureEvents = events
        .filter((event) => event.endDate >= this.dateTime.now())
        .sort((a, b) => a.startDate - b.startDate);
      */
     for (var i=0; i < events.length; i++) {
      console.log("Event Name: " + events[i].summary);
      if (events[i].isPast == false) {
        console.log("Event in future: " + events[i].summary);
      }
     }

      return [];
    } catch (e) {
      throw new ParseError(
        "Error parsing ICS data. The data might be malformed or corrupted. Error: " +
          e
      );
    }
  }

  createEvent(event) {
    try {
      //let event = new ICAL.Event(vevent);
      let startDate = this.dateTime.fromISO(event.start);
      let retevent = {
        startDate: startDate,
        endDate: this.dateTime.fromISO(event.end),
        summary: event.summary,
        description: event.description,
        location: event.location,
        duration: event.duration,
        isPast: startDate < this.dateTime.now(),
        ics: "test",
      };
      return retevent;
    } catch (e) {
      throw new CreationError("Error creating event. Error: " + e);
    }
  }
}
