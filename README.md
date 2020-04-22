# To-do-list

## Introductie 💬

In deze opdracht bouwen we een to-do lijstje in Vanilla Javascript. 

De lijst koppel ik aan een database, die beschikbaar is via een RESTful API. Niets van de data wordt opgeslagen in de front-end van de applicatie. 

## **Requirements:**

- Als gebruiker wil ik een inputveld zien waarin ik mijn taak in kan vullen.
- Als gebruiker kan ik op een button drukken met de tekst "Add Task" waardoor je ingevulde taak toegevoegd wordt aan de lijst.
- Als gebruiker zie ik wanneer ik op de add button knop heb geklikt, de taak verschijnen in mijn takenlijst.
- Taak verwijderen: Als gebruiker kan ik in de takenlijst op een icoontje klikken van een prullenbak, rechts naast de taak, waardoor de taak uit mijn takenlijst wordt verwijderd.
    - **trash-icon**

## **API requirements:**

- GET: Verkrijg de (initiële) lijst met taken van de database.
- POST: Update de takenlijst met 1 nieuwe taak. 
- DELETE: Verwijder een taak uit de database. Gebruik de hash als identifier.
- Maak een file genaamd `api-client.js` voor al je requests.

## **Extra Extra Bonus :**

🚀  Extra requirements: 

- Taak doorstrepen: Als gebruiker kan ik in de takenlijst op een checkbox klikken, links naast de taak, waardoor de tekst van de taak doorgestreept wordt en ik mijn taak kan afstrepen.

🚀  Extra API requirements (die samenhangt met het bovenstaande):

- PUT: update een bestaande taak de property done of niet done.

## **Verdere toevoeging**

Zelf heb ik nog een aantal dingen toegevoegd:
- Een refreshbutton, zodat alle taken in de DOM verwijderd worden.
- Een datumcomponent.
- UX: Om een taak toe te voegen kan ook de entertoets gebruikt worden.
