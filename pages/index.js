import Form from "react-jsonschema-form";
import Head from "next/head";

const schema = {
  $schema: "http://json-schema.org/draft-07/schema",
  $id: "form.json",
  type: "object",
  required: ["fullName"],
  properties: {
    fullName: {
      title: "Full name",
      type: "string",
    },
    isApplying: {
      title: "Are you applying for coverage?",
      type: "boolean",
    },
    birthdate: {
      title: "When is your birthday?",
      type: "string",
      format: "date",
    },
    employer: {
      title: "Your employer",
      type: "object",
      properties: {
        fein: {
          type: "number",
        },
      },
    },
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
          integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
          crossorigin="anonymous"
        />
      </Head>

      <section style={{ padding: 30, maxWidth: 600 }}>
        <Form schema={schema} />
      </section>
    </>
  );
}
