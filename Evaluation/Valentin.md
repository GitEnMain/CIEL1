## Partie 1 : HTML (10 points)

### QCM (5 points – 0,5 pt/question)

1. Quelle est la signification de HTML ?  
   - [ ] Hyperlinks and Text Markup Language  
   - [ X ] Hyper Text Markup Language  
   - [ ] Home Tool Markup Language  

2. Quelle balise permet d’afficher le titre d’une page dans l’onglet du navigateur ?  
   - [ x ] `<head>`  
   - [ ] `<title>`  
   - [ ] `<h1>`  

3. Quelle balise permet d’insérer une image ?  
   - [ X ] `<img>`  
   - [ ] `<image>`  
   - [ ] `<picture>`  

4. Quelle balise est utilisée pour créer un lien hypertexte ?  
   - [ ] `<a>`  
   - [ ] `<link>`  
   - [ x ] `<href>`  

5. Quel attribut est obligatoire dans la balise `<img>` ?  
   - [ x ] `src`  
   - [ ] `href`  
   - [ ] `alt`  

6. Quelle est la bonne syntaxe pour créer une liste non ordonnée ?  
   - [ x ] `<ul><li>Élément</li></ul>`  
   - [ ] `<ol><li>Élément</li></ol>`  
   - [ ] `<li><ul>Élément</ul></li>`  

7. La balise `<strong>` sert à :  
   - [ x ] Mettre le texte en gras  
   - [ ] Souligner le texte  
   - [ ] Centrer le texte  

8. Quelle est la structure minimale correcte d’un document HTML ?  
   - [ ] `<html><body></body></html>`  
   - [ X ] `<html><head></head><body></body></html>`  
   - [ ] `<body><html></html></body>`  

9. Quelle balise permet d’insérer un commentaire dans le code HTML ?  
   - [ ] `<!-- commentaire -->`  
   - [ x ] `// commentaire`  
   - [ ] `/* commentaire */`  

10. Quelle balise permet d’insérer un paragraphe ?  
    - [ x ] `<p>`  
    - [ ] `<text>`  
    - [ ] `<paragraph>`  

---

### Questions rédigées (5 points)

11. (1 pt) Expliquez la différence entre une balise ouvrante et une balise fermante en HTML, avec un exemple.  

> Réponse :  
> Un balise ouvrante nous permet de de définir le début d'un titre et la fermante de finir la limite de la balise ouvrante
Exemple : <h1></h1>

---

12. (2 pts) Écrivez le code HTML complet d’une page contenant :
- un titre principal "Mon premier site"
- une image `photo.jpg`
- un lien vers `https://example.com` avec le texte "Visitez ce site"

> Réponse :  
<html>
<head> Mon premier site</head>  
<body>
<img>"src= img/photo.jpg"</img>
<href>https://example.com</href>
</body>
</html>
---

13. (2 pts) Quelle est la différence entre les balises `<div>` et `<span>` ? Donnez un exemple d’utilisation typique pour chacune.  

> Réponse :  
> La balise <div> sert a crée une division pour créer une séparation entre deux élement du meme type comme les immage alors que la <span> sert a surligner un mot.

---

## Partie 2 : Git (10 points)

### QCM (5 points – 0,5 pt/question)

14. Quelle commande initialise un dépôt Git ?  
   - [ ] `git start`  
   - [ ] `git init`  
   - [ X ] `git create`  

15. Quelle commande permet d’ajouter des fichiers à la zone de préparation (staging area) ?  
   - [ X ] `git add`  
   - [ ] `git stage`  
   - [ ] `git push`  

16. Quelle commande permet d’enregistrer les changements dans l’historique du dépôt ?  
   - [ ] `git save`  
   - [ X ] `git commit`  
   - [ ] `git record`  

17. Quelle commande permet de consulter l’historique des commits ?  
   - [ ] `git status`  
   - [ X ] `git log`  
   - [ ] `git history`  

18. Quelle commande permet de cloner un dépôt distant ?  
   - [ ] `git copy`  
   - [ X ] `git clone`  
   - [ ] `git pull`  

19. Quelle commande affiche les fichiers modifiés mais non encore commités ?  
   - [ X ] `git status`  
   - [ ] `git show`  
   - [ ] `git diff`  

20. Quelle commande permet d’envoyer les commits locaux vers le dépôt distant ?  
   - [ ] `git send`  
   - [ ] `git upload`  
   - [ X ] `git push`  

21. Quelle commande permet de récupérer les modifications du dépôt distant sans les fusionner ?  
   - [ ] `git fetch`  
   - [ X ] `git pull`  
   - [ ] `git merge`  

22. Quelle commande permet de créer une nouvelle branche nommée `develop` ?  
   - [ X ] `git branch develop`  
   - [ ] `git create develop`  
   - [ ] `git checkout develop`  

23. Quelle commande permet de changer de branche ?  
   - [ ] `git change`  
   - [ ] `git switch`  
   - [ X ] `git swap`  

---

### Questions rédigées (5 points)

24. (2 pts) Expliquez la différence entre `git clone`, `git pull`.  

> Réponse :  
> Git clone nous permet de crée un dossier avec le nom du repository sur git, alors que git pull sert a récupérer tous les fichier du repository git quand une mise à jour est éffectué.

---

25. (1 pt) Quelle est la différence entre un dépôt local et un dépôt distant ?  

> Réponse :  
> Le dépôt local est que sur le pc sur lequel la personne travail alors que le dépôt distant est disponnible de n'importe quelle poste. 

---

26. (2 pts) Donnez la suite de commandes Git pour :
- créer un dépôt local,  
- y ajouter un fichier `index.html`,  
- enregistrer ce fichier dans l’historique du dépôt avec un message de commit,  
- et envoyer ce dépôt vers un dépôt distant nommé `origin` sur la branche `main`.  

> Réponse :  
> git clone "lien du git"
> git add index.html
> git commit -m "ajout de index.html"
> git push origin main
