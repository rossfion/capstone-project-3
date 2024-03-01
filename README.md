# capstone-project-3
Blog web application for Capstone Project #3

The project does not use a database, however, it implements an MVC design pattern with data being saved to and read from a JSON file.

Completed as at February 29, 2024:
1. Post creation feature implemented. Located in the admin area.
2. Post viewing feature implemented. Posts can be viewed both on the home page and in the admin area. Single posts can also be viewed by clicking the Read More button or any of the items in the list box below the login form.
3. Post editing feature implemented. The Add Form post is also used to edit posts when admin is TRUE. Existing posts are loaded into the form, allowing the user to edit and save the posts.
4. Post delete feature implemented. Clicking the delete button on the post immediately removes it from both the admin and home pages.
5. Bootstrap 5 is used for CSS and JavaScript, plus some custom styling for home and admin pages.
6. TODO/Tasks function added

TODO: 
1. Validation for login to admin area. If not logged in, return them to the home page.
2. Make the Search function work. Alternatively, add the search form to the navigation bar so it is available when the media query for max 990px kicks in.
3. Implement a file upload facility for images
4. Highlight the list-group area with an active CSS color when an item is selected
5. Add comments form
7. Add a blog archive function
8. Move the Add Post link to the admin area -> DONE 02/29/2024
9. Implement a HTML/JS Text Editor
10. Implement this TODO list using the File System (text file)
11. Tidy up the code - DONE 02/29/2024
12. Build the project before putting it on my own site
