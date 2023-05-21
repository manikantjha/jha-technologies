import ContainerWrapper from "@/components/common/ContainerWrapper";
import Title from "@/components/common/Title";
import Layout from "@/layout/Layout";
import React from "react";

export default function privacy() {
  return (
    <Layout>
      <ContainerWrapper>
        <Title title="Privacy Policy" />
        <p>
          At Jha Technologies, we are committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy
          Policy outlines how we collect, use, and safeguard the information you
          provide to us through our website and services. By accessing and using
          our website, you consent to the practices described in this policy.
        </p>
        <br />
        <ul className="list-disc space-y-2">
          <li>
            <b>Information Collection:</b> We may collect personal information,
            such as your name, email address, phone number, and company name,
            when you voluntarily provide it to us through our contact forms or
            when subscribing to our newsletter. We also gather anonymous
            information, such as your IP address and browsing patterns, using
            cookies and similar technologies.
          </li>
          <li>
            <b>Information Usage:</b> We use the information we collect to
            provide and improve our services, communicate with you, and
            personalize your experience. We may also use your information for
            marketing purposes, such as sending relevant updates and promotional
            materials. However, we will not sell or disclose your personal
            information to third parties without your consent, unless required
            by law.
          </li>
          <li>
            <b>Data Security:</b> We employ industry-standard security measures
            to protect your personal information from unauthorized access, loss,
            misuse, or alteration. However, please note that no data
            transmission over the internet or electronic storage method is
            entirely secure.
          </li>
          <li>
            <b>Cookies:</b> Our website may use cookies to enhance your browsing
            experience. You have the option to accept or decline cookies through
            your web browser settings. However, disabling cookies may affect the
            functionality and usability of our website.
          </li>
          <li>
            <b>External Links:</b> Our website may contain links to external
            sites. We are not responsible for the privacy practices or content
            of these third-party websites. We encourage you to review their
            respective privacy policies.
          </li>
          <li>
            <b>Updates to Privacy Policy:</b> We may update our Privacy Policy
            periodically to reflect changes in our practices or legal
            requirements. The updated policy will be posted on our website, and
            your continued use of our services after any modifications
            constitute your acceptance of the revised policy.
          </li>
        </ul>
        <br />
        <p>
          If you have any questions or concerns regarding our Privacy Policy,
          please contact us using the information provided on our website.
        </p>
      </ContainerWrapper>
    </Layout>
  );
}
