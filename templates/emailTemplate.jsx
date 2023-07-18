// templates/emailTemplate.js
const generateEmailTemplate = (brandName, message) => {
    return `
      <html>
        <head>
          <style>
            /* Add your custom styles here */
          </style>
        </head>
        <body>
          <h1>${brandName}</h1>
          <p>${message}</p>
        </body>
      </html>
    `;
  };
  
  module.exports = generateEmailTemplate;
  