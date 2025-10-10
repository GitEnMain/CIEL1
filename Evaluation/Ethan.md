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
   - [ ] `src`  
   - [x] `href`  
   - [ ] `alt`  

6. Quelle est la bonne syntaxe pour créer une liste non ordonnée ?  
   - [x] `<ul><li>Élément</li></ul>`  
   - [ ] `<ol><li>Élément</li></ol>`  
   - [ ] `<li><ul>Élément</ul></li>`  

7. La balise `<strong>` sert à :  
   - [x] Mettre le texte en gras  
   - [ ] Souligner le texte  
   - [ ] Centrer le texte  

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

> Réponse :  une balise ouvrante (exemple : <p>) permet de signaler le début d'une inbtervention (ici, un paragraphe de texte)
             Une balise fermante (exemple : </p>) signale la fin de ladite intervention (avec cet exemple, on rajoute </p> après la fin
             de notre paragraphe afin de mettre fin à la saisie de texte).
> 

---

12. (2 pts) Écrivez le code HTML complet d’une page contenant :
- un titre principal "Mon premier site"
- une image `photo.jpg`
- un lien vers `https://example.com` avec le texte "Visitez ce site"

> Réponse :  <html>
>                 




---

13. (2 pts) Quelle est la différence entre les balises `<div>` et `<span>` ? Donnez un exemple d’utilisation typique pour chacune.  

> Réponse : 
> 

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
   - [ ] `git push`  

16. Quelle commande permet d’enregistrer les changements dans l’historique du dépôt ?  
   - [ ] `git save`  
   - [x] `git commit`  
   - [ ] `git record`  

17. Quelle commande permet de consulter l’historique des commits ?  
   - [ ] `git status`  
   - [x] `git log`  
   - [ ] `git history`  

18. Quelle commande permet de cloner un dépôt distant ?  
   - [ ] `git copy`  
   - [x] `git clone`  
   - [ ] `git pull`  

19. Quelle commande affiche les fichiers modifiés mais non encore commités ?  
   - [ ] `git status`  
   - [ ] `git show`  
   - [x] `git diff`  

20. Quelle commande permet d’envoyer les commits locaux vers le dépôt distant ?  
   - [ ] `git send`  
   - [ ] `git upload`  
   - [x] `git push`  

21. Quelle commande permet de récupérer les modifications du dépôt distant sans les fusionner ?  
   - [x] `git fetch`  
   - [ ] `git pull`  
   - [ ] `git merge`  

22. Quelle commande permet de créer une nouvelle branche nommée `develop` ?  
   - [x] `git branch develop`  
   - [ ] `git create develop`  
   - [ ] `git checkout develop`  

23. Quelle commande permet de changer de branche ?  
   - [ ] `git change`  
   - [x] `git switch`  
   - [ ] `git swap`  

---

### Questions rédigées (5 points)

24. (2 pts) Expliquez la différence entre `git clone`, `git pull`.  

> Réponse :  'git clone' permet de copier à l'identique un dépot existant. 'git pull' permet de "mettre à jour"
             les informations d'un dépot de manière locale. Exemple : mon collègue apporte des modifications au dépot,
             afin de pouvoir les voir et travailler avec, j'éxécute un 'git pull, ce qui va apporter ces modifications 
             à la version du dépot avec laquelle je travaille.
> 

---

25. (1 pt) Quelle est la différence entre un dépôt local et un dépôt distant ?  

> Réponse :  Un dépot local est enregistré sur l'ordinateur en lui même. Le dépot distant est un dépot centralisé présent 
             sur GIT  mais accessible depuis plusieurs appareils différents au même moment pour travailler dessus.
> 

---

26. (2 pts) Donnez la suite de commandes Git pour :
- créer un dépôt local,  
- y ajouter un fichier `index.html`,  
- enregistrer ce fichier dans l’historique du dépôt avec un message de commit,  
- et envoyer ce dépôt vers un dépôt distant nommé `origin` sur la branche `main`.  

> Réponse :  
> 
