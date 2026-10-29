# Project images

Put each project's images in the folder for the kind of work it shows:

| Folder | What goes here |
| --- | --- |
| `development/` | screenshots of apps you built (web and mobile) |
| `ui-ux/` | Figma screens, Balsamiq wireframes |
| `project-management/` | ClickUp / Trello boards, draw.io diagrams |
| `testing/` | Postman requests, test cases, bug reports |

Make one sub-folder per project, e.g. `development/sorsupport/`.

Name the main picture **`cover.png`**. It is shown on the project card and as the
first picture in the project pop-up.

Extra pictures (for example one per account type) are listed as `gallery` in
`js/main.js` and appear in the pop-up with arrows. For SorSUpport the expected
files are:

- `development/sorsupport/cover.png` - main screen
- `development/sorsupport/student.png` - student account
- `development/sorsupport/recipient.png` - recipient (office staff) account
- `development/sorsupport/admin.png` - SDS administrator account

Pictures that are not uploaded yet are simply skipped.

Tips:
- Landscape screenshots look best (about 16:10, e.g. 1600 × 1000).
- Hide teammates' names, emails, passwords and private links before uploading.
