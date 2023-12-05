# RDashboard

## API Documentation


### Achats
A.	Nombre d’employés du service Achats pour l’ensemble du groupe laitier

  Methode : GET
  Endpoint : "/api/v1/employees/{service}"
  Description : returns the number of employees in the {service} that can be : "commercial, finance et gestion, ressources humaines, juridique, logistique, assistance commerciale,    direction générale, maintenance, achats, cyber sécurité, recherche et développement, informatique, qualité, collecte, marketing, industriel, assistance technique, analyse des données"
  For example : to get the number of employees in the service "achats", the endpoint is "/api/v1/employees/achats"

  
B.	Montant le plus élevé de tous les achats

  Methode : GET
  Endpoint : "/api/v1/sales/top-sales"
  Description : returns the highest amount of all purchases.

  
### Collecte (déchets)
A.	Zone la plus chaude de tout le groupe laitier

  Methode : GET
  Endpoint : ""
  Description : 

  
B.	Pourcentage des zones ayant été validées cette année par un audit de conformité

  Methode : GET
  Endpoint : ""
  Description : 

  
###	Juridique
A.	Nombre de machines en panne

  Methode : GET
  Endpoint : "/api/v1/machines/shutdown"
  Description : returns the number of machines down.

  
B.	Nombre maximum de personnel juridique regroupé sur le même site

  Methode : GET
  Endpoint : ""
  Description : 


# database startup command
    docker run -d -p 27017:27017 -v $(pwd)/data:/data/db mongo