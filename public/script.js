const textArea = document.getElementById("text_to_summarize");
const submitButton = document.getElementById("submit-button");
const summarizedTextArea = document.getElementById("summary");

submitButton.disabled = true;

textArea.addEventListener("input", verifyTextLength);
submitButton.addEventListener("click", submitData);

const generateSampleButton = document.getElementById("generate-sample-button");

// Add a click event listener to the new button
generateSampleButton.addEventListener("click", generateSampleText);

// Function to insert sample text in the text area
function generateSampleText() {
  const sampleText = `Hello! 👋 I'm Sachin Prajapati, a passionate tech enthusiast from district of Balrampur, Uttar Pradesh. 
Currently I am learning Java Full Stack.
It's a pleasure to welcome you to my LinkedIn profile!

𝗘𝘅𝗽𝗹𝗼𝗿𝗶𝗻𝗴 𝘁𝗵𝗲 𝗧𝗲𝗰𝗵 𝗪𝗼𝗿𝗹𝗱: My journey into the fascinating realm of technology began during my school days in Balrampur when I got intrigued by the mechanics of game development and the magic behind app functionalities. This curiosity sparked my interest in computer science, leading me to pursue it academically.

𝗙𝗿𝗼𝗺 𝗣𝗮𝘀𝘀𝗶𝗼𝗻 𝘁𝗼 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: While I deeply enjoy exploring the intricacies of software development, I couldn't resist my love for sports, particularly cricket, football, and badminton. During my intermediate studies, I embraced my passion for sports by taking physical education courses, striking a balance between my love for sports and my technological pursuits. My journey is a testament to the harmony between my passion for both worlds.

𝗣𝘂𝗿𝘀𝘂𝗶𝗻𝗴 𝗘𝘅𝗰𝗲𝗹𝗹𝗲𝗻𝗰𝗲:Currently, I am a dedicated student at Lovely Professional University, where I am pursuing my B.Tech in Computer Science and Engineering. This transformative academic journey has not only deepened my knowledge but also expanded my skills in Java, JavaSwing, HTML, CSS, and JavaScript.

𝗘𝗺𝗯𝗿𝗮𝗰𝗶𝗻𝗴 𝗡𝗲𝘄 𝗛𝗼𝗿𝗶𝘇𝗼𝗻𝘀: My thirst for knowledge knows no bounds, and I continually seek opportunities to explore emerging technologies and learn new programming languages. I believe that staying updated with the latest trends is key to becoming a proficient technologist and making a real impact in the digital world.

𝗕𝘂𝗶𝗹𝗱𝗶𝗻𝗴 𝗣𝗿𝗼𝗷𝗲𝗰𝘁𝘀: Throughout my educational journey, I've actively applied my expertise to develop projects that showcase my abilities in Java, JavaSwing, HTML, and CSS. You can explore some of these projects in the "Featured" section.

𝗣𝗮𝘀𝘀𝗶𝗼𝗻 𝗳𝗼𝗿 𝗚𝗿𝗼𝘄𝘁𝗵: I strongly believe in the power of continuous improvement and fostering meaningful connections. As I progress in my career, I'm eager to collaborate with like-minded professionals and contribute to projects that positively impact our society and enrich lives.


𝙇𝙚𝙩'𝙨 𝘾𝙤𝙣𝙣𝙚𝙘𝙩: I'm always open to engaging with individuals who share similar interests, whether it's discussing tech innovations, sports, or potential collaborations.

Thank you for visiting my profile. Let's embark on this exciting journey of growth and achievement!`;

  // Set the sample text in the text area
  textArea.value = sampleText;

  // Trigger the input event to enable or disable the submit button based on the text length
  const event = new Event("input");
  textArea.dispatchEvent(event);
}

function verifyTextLength(e) {
  // The e.target property gives us the HTML element that triggered the event, which in this case is the textarea. We save this to a variable called 'textarea'
  const textarea = e.target;

  // Verify the TextArea value.
  if (textarea.value.length > 200 && textarea.value.length < 100000) {
    // Enable the button when text area has value.
    submitButton.disabled = false;
  } else {
    // Disable the button when text area is empty.
    submitButton.disabled = true;
  }
}

function submitData(e) {

  // This is used to add animation to the submit button
  submitButton.classList.add("submit-button--loading");

  const text_to_summarize = textArea.value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "text_to_summarize": text_to_summarize
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };



  // Send the text to the server using fetch API

  // Note - here we can omit the “baseUrl” we needed in Postman and just use a relative path to “/summarize” because we will be calling the API from our Replit!  
  fetch('/summarize', requestOptions)
    .then(response => response.text()) // Response will be summarized text
    .then(summary => {
      // Do something with the summary response from the back end API!

      // Update the output text area with new summary
      summarizedTextArea.value = summary;

      // Stop the spinning loading animation
      submitButton.classList.remove("submit-button--loading");
    })
    .catch(error => {
      console.log(error.message);
    });
}