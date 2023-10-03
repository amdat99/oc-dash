"use client";

import FormGroup from "@/components/form/FormGroup";
import React from "react";

function page() {
  const [model, setModel] = React.useState({} as any);
  return (
    <div className="card d-flex justify-content-center align-items-center w-100">
      <FormGroup
        model={model}
        setModel={setModel}
        fields={[
          { name: "email", type: "input", placeholder: "email", subType: "email", required: true },
          { name: "password", type: "input", placeholder: "password", subType: "password", required: true },
          { name: "confirmPassword", type: "input", placeholder: "confirm password", subType: "password", required: true },
        ]}
        errors={undefined}
        setErrors={function (errors: any): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}

export default page;
