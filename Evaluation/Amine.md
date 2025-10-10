10/20


## Partie 1 : HTML (10 points)

### QCM (5 points – 0,5 pt/question)

1. Quelle est la signification de HTML ?  0.5
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
   - [x] `<a>`  
   - [ ] `<link>`  
   - [ ] `<href>`  

5. Quel attribut est obligatoire dans la balise `<img>` ? 
   - [ ] `src`  
   - [ ] `href`  
   - [x] `alt`  

6. Quelle est la bonne syntaxe pour créer une liste non ordonnée ?
   - [x] `<ul><li>Élément</li></ul>`  
   - [ ] `<ol><li>Élément</li></ol>`  
   - [ ] `<li><ul>Élément</ul></li>`  

7. La balise `<strong>` sert à : 
   - [x] Mettre le texte en gras  
   - [ ] Souligner le texte  
   - [ ] Centrer le texte  

8. Quelle est la structure minimale correcte d’un document HTML ? 
   - [x] `<html><body></body></html>`  
   - [ ] `<html><head></head><body></body></html>`  
   - [ ] `<body><html></html></body>`  

9. Quelle balise permet d’insérer un commentaire dans le code HTML ?  
   - [ ] `<!-- commentaire -->`  
   - [ ] `// commentaire`  
   - [x] `/* commentaire */`  

10. Quelle balise permet d’insérer un paragraphe ?  
    - [ ] `<p>`  
    - [x] `<text>`  
    - [ ] `<paragraph>`  

---

### Questions rédigées (5 points)

11. (1 pt) Expliquez la différence entre une balise ouvrante et une balise fermante en HTML, avec un exemple.  

> Réponse :  une balise ouvrante se met avant l'expression pour ouvrir, et la balise fermante se met à la fin pour fermer. La balise d'ouverture se compose d'un chevron, puis le code puis le chevron fermé. La balise fermante se compose d'un chevron ouvert, un slash, le code, puis un chevron fermé. Exemple: <li>texte</li>.
> 

---

12. (2 pts) Écrivez le code HTML complet d’une page contenant :
- un titre principal "Mon premier site"
- une image `photo.jpg`
- un lien vers `https://example.com` avec le texte "Visitez ce site"

> Réponse : 
>  




---

13. (2 pts) Quelle est la différence entre les balises `<div>` et `<span>` ? Donnez un exemple d’utilisation typique pour chacune.  

> Réponse :  
> 

---

## Partie 2 : Git (10 points)

### QCM (5 points – 0,5 pt/question) 3.5/5

14. Quelle commande initialise un dépôt Git ?  
   - [x] `git start`  
   - [ ] `git init`  
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
   - [x] `git status`  
   - [ ] `git show`  
   - [ ] `git diff`  

20. Quelle commande permet d’envoyer les commits locaux vers le dépôt distant ?  
   - [ ] `git send`  
   - [ ] `git upload`  
   - [x] `git push`  

21. Quelle commande permet de récupérer les modifications du dépôt distant sans les fusionner ?  
   - [ ] `git fetch`  
   - [ ] `git pull`  
   - [x] `git merge`  

22. Quelle commande permet de créer une nouvelle branche nommée `develop` ? 
   - [x] `git branch develop`  
   - [ ] `git create develop`  
   - [ ] `git checkout develop`  

23. Quelle commande permet de changer de branche ? 
   - [x] `git change`  
   - [ ] `git switch`  
   - [ ] `git swap`  

---

### Questions rédigées (5 points) 2.5/5

24. (2 pts) Expliquez la différence entre `git clone`, `git pull`.  

> Réponse : git clone sert à cloner ce qu'il y a dans le dépot distant dans le dépot local et git pull sert à importer.
> 

---

25. (1 pt) Quelle est la différence entre un dépôt local et un dépôt distant ?  

> Réponse : Le dépot distant c'est là où il y a notre branche publique, et le dépot local est privé.
> 

---

26. (2 pts) Donnez la suite de commandes Git pour :
- créer un dépôt local,  
- y ajouter un fichier `index.html`,  
- enregistrer ce fichier dans l’historique du dépôt avec un message de commit,  
- et envoyer ce dépôt vers un dépôt distant nommé `origin` sur la branche `main`.  

> Réponse : git start; git global --user.name; git clone (adresse du dépot); git pull; git status
> 
