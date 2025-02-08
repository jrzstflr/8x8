import React from "react";

const emailTemplates = [
  {
    id: 1,
    title: "Acknowledgement Email",
    content: `<p>Thank you for reaching out to us. I have received your reported case and I an currently reviewing the details. I am now working on it, and I will contact you shortly with an update.</p>
    <p><strong>In the event of any delays in my callback, I will send you another email to keep you informed of the progress. In the meantime, if you experience any additional issues or need further assistance, please feel free to reply to this email, and I will be happy to assist you.</strong></p>
    <p><i>We appreciate your patience and understanding.</i></p>`,
  },
  {
    id: 2,
    title: "Voicemail Email",
    content: `<p><i>We have just attempted to call you on [telephone number] and left you a Voice Mail. [DELETE if no VM]</i></p>
    <p><i><strong>We would love the opportunity to resolve your case soon</strong> so please let us know if there is an alternative telephone number we could reach you at and when you would prefer us to try calling again in order to assist with your inquiry.<i></p>
    <p><i>Looking forward to your reply.</i></p>`,
  },
  {
    id: 3,
    title: "Limitation/Feature Request Email",
    content: `<p>I hope this message finds you well.</p>
    <p><strong>As we confirmed that this feature does not currently exist in 8x8, I took the initiative to create an internal ticket (XR-7015) regarding the feature "name of the feature". This ticket has been forwarded to our Development Team for their review.</strong></p>
    <p><strong>While we cannot guarantee immediate changes, please rest assured that your request will be considered for future updates. We are continually seeking ways to enhance our services.</strong></p>
    <p><i>We are closing this case. In case you need further assistance, please reopen this case within 14 days so we can call you and assist. Thank you for being an 8x8 customer!</i></p>
    <p>Thank you for your understanding and support.</p>`
  },
  {
    id: 4,
    title: "Primary Admin Change Email Instructions",
    content: `<p>I hope this email finds you well. To ensure a smooth transition of your 8x8 account's Primary Admin, please carefully follow the steps outlined below using the Primary Admin Change Request Form. This process will legally authorize the transfer of admin and billing responsibilities without requiring a full system recreation.</p>
    <p><strong>Steps to Complete the Primary Admin Change Request:</strong></p>
    <p><strong>1. Download the Template </strong>- Please find the attached form in this email.</p>
    <p><strong>2. Create the Document on Your Company Letterhead </strong>- <strong><u>Important:</u></strong> Do not fill out the example form directly. You must create a new document using your company’s official letterhead.</p>
    <p><strong>3. Ensure the New Admin Has a Profile in the Admin Console</strong> - Before proceeding, confirm that the new admin already has an active profile created in the <strong>8x8 Admin Console.</strong></p>
    <p><strong></strong></p>
    <p><strong>4. Obtain Signatures</strong>- The letter must be signed by both the <strong>Previous Primary Admin</strong> and the <strong>New Primary Admin.</strong></p>
    <p><strong>5. Submit the Signed Document</strong>- Once complete, submit the document by replying to this email together with the attachemnt.</p>
    <p><strong>What to Expect Next</strong></p>
    <p>After submission, an 8x8 Support Agent will reach out within <strong>24 hours</strong> to finalize the transfer.</p>
    <p><strong>Important:</strong> Following these steps is essential to avoid any delays in the transfer process.</p>
    <p>If you have any questions or need further assistance, please don’t hesitate to reach out.</p>`
  },
  {
    id: 5,
    title: "Day 10  - 3 Strike no response Resolved e-mail",
    content: `<p><i>We have been trying to get in touch with you for the past few days in order to assist with your case and  we could not reach you via email or call.</i></p>
    <p><i><strong>We are still keen on assisting with your case however, since we could not get in touch, we will close this case for now; please do not hesitate to re-open when you are available.</strong></i></p>
    <p><i>Please note that if you would like to revisit this after more than 14 days since the ticket is marked resolved, you will need to raise a new ticket.</i></p>`
  },
  {
    id: 6,
    title: "",
    content: `
    
    `
  },
  {
    id: 7,
    title: "",
    content: `
    
    `
  },
  {
    id: 8,
    title: "",
    content: `
    
    `
  },
  {
    id: 9,
    title: "",
    content: `
    
    `
  },
  {
    id: 10,
    title: "",
    content: `
    
    `
  },
];

const Email = () => {
  const openPopup = (content) => {
    const popup = window.open(
      "",
      "_blank",
      "width=600,height=400,scrollbars=yes,resizable=yes"
    );

    if (popup) {
      popup.document.write(`
        <html>
          <head>
            <title>Email Template</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              pre { white-space: pre-wrap; word-wrap: break-word; font-size: 14px; }
              button { margin-top: 10px; padding: 10px; background-color: #007bff; color: #fff; border: none; cursor: pointer; }
              button:hover { background-color: #0056b3; }
            </style>
          </head>
          <body>
            <div>${content}</div>
            <button onclick="copyContent()">Copy Email</button>
            <script>
              function copyContent() {
                const range = document.createRange();
                range.selectNode(document.body.children[0]);
                const selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
                document.execCommand('copy');
                alert('Email template copied!');
              }
            </script>
          </body>
        </html>
      `);
    }
  };

  return (
    <div className="bg-gray-800 py-8">
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-white border-b pb-2 mb-4">
        Email Templates
      </h2>
      <ul className="space-y-3">
        {emailTemplates.map((template) => (
          <li key={template.id} className="p-3 bg-gray-400 rounded-md shadow hover:bg-black">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openPopup(template.content);
              }}
              className="text-white hover:text-blue-800 font-medium underline"
            >
              {template.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Email;
