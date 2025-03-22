interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({
  firstName,
  email,
  message,
}: EmailTemplateProps) => (
  <div>
    <p>From: {firstName} &lt;<a href={`mailto:${email}`}>{email}</a>&gt;</p>
    <p>{message}</p>
  </div>
);