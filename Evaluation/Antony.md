## Partie 1 : HTML (10 points)

### QCM (5 points – 0,5 pt/question)

1. Quelle est la signification de HTML ?
   - [ ] Hyperlinks and Text Markup Language  
   - [x] Hyper Text Markup Language  
   - [ ] Home Tool Markup Language  

2. Quelle balise permet d’afficher le titre d’une page dans l’onglet du navigateur ?
   - [ ] `<head>`  
   - [x] `<title>`  
   - [ ] `<h1>`  

3. Quelle balise permet d’insérer une image ?
   - [x] `<img>`  
   - [ ] `<image>`  
   - [ ] `<picture>`  

4. Quelle balise est utilisée pour créer un lien hypertexte ?
   - [ ] `<a>`  
   - [x] `<link>`  
   - [ ] `<href>`  

5. Quel attribut est obligatoire dans la balise `<img>` ?
   - [x] `src`  
   - [ ] `href`  
   - [ ] `alt`  

6. Quelle est la bonne syntaxe pour créer une liste non ordonnée ?
   - [x] `<ul><li>Élément</li></ul>`  
   - [ ] `<ol><li>Élément</li></ol>`  
   - [] `<li><ul>Élément</ul></li>`  

7. La balise `<strong>` sert à :
   - [x] Mettre le texte en gras  
   - [ ] Souligner le texte  
   - [x] Centrer le texte  

8. Quelle est la structure minimale correcte d’un document HTML ?
   - [ ] `<html><body></body></html>`  
   - [x] `<html><head></head><body></body></html>`  
   - [ ] `<body><html></html></body>`  

9. Quelle balise permet d’insérer un commentaire dans le code HTML ?
   - [x] `<!-- commentaire -->`  
   - [ ] `// commentaire`  
   - [ ] `/* commentaire */`  

10. Quelle balise permet d’insérer un paragraphe ?
    - [x] `<p>`  
    - [ ] `<text>`  
    - [ ] `<paragraph>`  

---

### Questions rédigées (5 points)

11. (1 pt) Expliquez la différence entre une balise ouvrante et une balise fermante en HTML, avec un exemple.

> Réponse :
<p> et une balise ouvrante sert a dire se qu'on fait dedan exemple la c est un paragraphe
</p> et une balise ferme sa sert a dire qu'on arrete le paragraphe
> 

---

12. (2 pts) Écrivez le code HTML complet d’une page contenant :
- un titre principal "Mon premier site"
- une image `photo.jpg`
- un lien vers `https://example.com` avec le texte "Visitez ce site"

> Réponse : 
   <html>
   <head>
      <title>Mon premier site</title>
   </head>
   <body>
      <src=img/photo.jpg>
      <>
   </body>
   </html>

13. (2 pts) Quelle est la différence entre les balises `<div>` et `<span>` ? Donnez un exemple d’utilisation typique pour chacune.

> Réponse :  
>  <div> permet de cree different partie
   <span>permet de coupe 
---

## Partie 2 : Git (10 points)

### QCM (5 points – 0,5 pt/question)

14. Quelle commande initialise un dépôt Git ?
   - [ ] `git start`  
   - [x] `git init`  
   - [ ] `git create`  

15. Quelle commande permet d’ajouter des fichiers à la zone de préparation (staging area) ?
   - [x] `git add`  
   - [ ] `git stage`  
   - [] `git push`  

16. Quelle commande permet d’enregistrer les changements dans l’historique du dépôt ?  
   - [ ] `git save`  
   - [x] `git commit`  
   - [ ] `git record`  

17. Quelle commande permet de consulter l’historique des commits ?  
   - [ ] `git status`  
   - [ ] `git log`  
   - [x] `git history`  

18. Quelle commande permet de cloner un dépôt distant ?  
   - [ ] `git copy`  
   - [x] `git clone`  
   - [ ] `git pull`  

19. Quelle commande affiche les fichiers modifiés mais non encore commités ?  
   - [x] `git status`  
   - [ ] `git show`  
   - [ ] `git diff`  

20. Quelle commande permet d’envoyer les commits locaux vers le dépôt distant ?  
   - [ ] `git send`  
   - [ ] `git upload`  
   - [x] `git push`  

21. Quelle commande permet de récupérer les modifications du dépôt distant sans les fusionner ?  
   - [ ] `git fetch`  
   - [x] `git pull`  
   - [ ] `git merge`  

22. Quelle commande permet de créer une nouvelle branche nommée `develop` ?  
   - [] `git branch develop`  
   - [x] `git create develop`  
   - [ ] `git checkout develop`  

23. Quelle commande permet de changer de branche ?  
   - [ ] `git change`  
   - [x] `git switch`  
   - [ ] `git swap`  

---

### Questions rédigées (5 points)

24. (2 pts) Expliquez la différence entre `git clone`, `git pull`.  

> Réponse :  
> 
git clone permet de copie de le depot
git pull permet de recupere les modification fait sur le depot

---

25. (1 pt) Quelle est la différence entre un dépôt local et un dépôt distant ?  

> Réponse :  
un depot local c est le depot du pc 
un depot distant et un depot qui est sur un serveur
> 

---

26. (2 pts) Donnez la suite de commandes Git pour :
- créer un dépôt local,  
- y ajouter un fichier `index.html`,  
- enregistrer ce fichier dans l’historique du dépôt avec un message de commit,  
- et envoyer ce dépôt vers un dépôt distant nommé `origin` sur la branche `main`.  

> Réponse :  
> 
git create develop
git add index.html
git commit
git branch origin 


