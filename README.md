
# Frontend

pour faire fonctionner le frontend, placez vous dans le dossier client depuis le 
terminal, puis effectuez la commande suivante: 
    npm run dev


# Backend 

pour faire fonctionner le backend, placez vous dans le dossier server depuis le 
terminal, puis effectuez la commande
    npm start

ayant envisage les contraintes specifiques demandes, nous avons egallement separe
le server en plusieurs serveurs (from monolithic to microservices). 
afin de faire fonctionner les micro-services vous pouvez encore une fois depuis le
dossier server dans le terminal effectuer la commande
    npm run <nom du micro-service>

## important
un fichier .env reside dans notre projet (folder server) ou les connexion strings ainsi que les mots de passes et autres informations ne devant etre push resident.
vous pouvez soit le creer vous meme et mettre vos propres parametres soit supprimer du 
projet toutes les variables .env .





# Database

## MongoDB

la base de donnees eyant ete utilisee au cours de ce devoir
a ete un server local mongodb, dockerise.
ne pouvant partager la base de donnees en question, nous vous avons fourni les differentes
donnees enregistres dans la base (data folder). 

dans le dossier server, dossier db reside dans lequel un fichier de connexion indique les 
methodes pour se connecter a la base de donnees.

dans le dossier model, les differents documents des collections de la base de donnees sont specifies.

dans le cas ou vous voudriez avoir la base de donnees sur votre pc, il vous suffit de suivre ses etapes : 

### Docker
dans un premier temps telechargez docker sur votre ordinateur.

### telecharger l'image Mongo
dans un second temps effectuez la commande suivante afin de telecharger l'image necessaire de Mongo:
    docker pull mongo

### creer le conteneur Mongo
dans un troisieme temps il faut allouer de lespace disque pour la base de donnees et run l image 
telecharger dans un environement isole (conteneur).
    docker run -d -p 27017:27017 -v $(pwd)/data:/data/db mongo
apres cette commande un hash vous sera attribue, cest l'id du conteneur ou fonctionne la DB.

### connexion a la base
pour nous connecter a la base de donnees, nous avons utilise le software mongodb compass. 
les informations de connexion sont les suivantes: 
    mongodb://localhost:27017/RDashboard

### charger les donnees
pour charger les donnees faites fonctionner le server une fois, les collections devraient se 
creer automatiquement. une fois crees depuis compass, chargez les donnees du folder data.

 

