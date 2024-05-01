const tools = [
    {
        name: "GitHub",
        description: "A web-based platform that provides hosting services for Git repositories.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png",
        url: "https://github.com"
    },
    {
        name: "Visual Studio Code",
        description: "A powerful, open-source, cross-platform editor from Microsoft.",
        imageUrl: "https://yt3.googleusercontent.com/_q52i8bUAEvcb7JR4e-eNTv23y2A_wg5sCz0NC0GrGtcw1CRMWJSOPVHUDh_bngD0q4gMvVeoA=s900-c-k-c0x00ffffff-no-rj",
        url: "https://code.visualstudio.com"
    },
    {
        name: "Atom",
        description: "A versatile and user-friendly code editor that provides powerful features and customization options for web developers, developed by GitHub.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Atom_editor_logo.svg/1200px-Atom_editor_logo.svg.png",
        url: "https://atom-editor.cc"
    },
    {
        name: "React",
        description: "A popular frontend framework developed by Facebook.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTw3HApB4bsvabXW3L14cV-LhFo0L71QmEESJN3vW9Ow&s",
        url: "https://react.dev"
    },
    {
        name: "ASP.NET Core",
        description: "An open-source web application framework developed by Microsoft.",
        imageUrl: "https://codeopinion.com/wp-content/uploads/2018/07/Bitmap-MEDIUM_ASP.NET-Core-Logo_2colors_Square_RGB.png",
        url: "https://dotnet.microsoft.com/en-us/learn/aspnet/blazor-tutorial/intro"
    },
    {
        name: "Django",
        description: "A high-level Python web framework that enables rapid development of secure and maintainable websites. ",
        imageUrl: "https://www.djangoproject.com/m/img/logos/django-logo-positive.png",
        url: "https://www.djangoproject.com"
    }
    
];

const toolsList = document.getElementById('tools-list');

// Adding tool cards
tools.forEach(tool => {
    const toolCard = document.createElement('div');
    toolCard.classList.add('tool-card');

    const image = document.createElement('img');
    image.src = tool.imageUrl;
    image.alt = tool.name;
    image.addEventListener('click', () => {
        window.open(tool.url, '_blank');
    });
    toolCard.appendChild(image);

    const heading = document.createElement('h2');
    heading.textContent = tool.name;
    toolCard.appendChild(heading);

    const description = document.createElement('p');
    description.textContent = tool.description;
    toolCard.appendChild(description);

    const link = document.createElement('a');
    link.textContent = "Learn more";
    link.href = tool.url;
    link.target = "_blank"; // Open link in a new tab
    toolCard.appendChild(link);

    toolsList.appendChild(toolCard);
});

const advertisingSection = document.createElement('section');
advertisingSection.id='advertising';
document.body.appendChild(advertisingSection);
const adCard = document.createElement('div');
adCard.classList.add('ad-card');
const adImage = document.createElement('img');
adImage.src = "Discover.jpg"; 
adImage.alt = "Advertisement";
adImage.addEventListener('click', () => {
    window.open('http://localhost:3005', '_blank'); // Adjust URL for the react app
});
adCard.appendChild(adImage);
advertisingSection.appendChild(adCard);
