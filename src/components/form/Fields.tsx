import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FieldsType } from "./Form";

type Props = {
  field: FieldsType;
  model: any;
  onChange: (e: any, field: any) => void;
  errors?: any;
  fields?: FieldsType[] | null;
  setFocusedModels?: (focusedModels: any) => void;
  setErrors?: (errors: any) => void;
  showFloatingLabel?: boolean;
  submitAction?: () => void;
};

const Fields = ({ field, model, onChange, errors = {}, fields, setFocusedModels = () => {}, showFloatingLabel = true, submitAction }: Props) => {
  const disabled: boolean = field.disabled ? field.disabled({ model, field, fields }) : false;

  const onBlur = () => {
    // Blur validation
    setFocusedModels((focusedModels: any) => ({
      ...focusedModels,
      [field.name]: false,
    }));
    field?.onBlur && field.onBlur();
  };

  const onFocus = () => {
    // Focus validation
    setFocusedModels((focusedModels: any) => ({
      ...focusedModels,
      [field.name]: true,
    }));
    field?.onFocus && field.onFocus();
  };

  switch (field.type) {
    case "input":
      return (
        <>
          {field.subType === "color" && model[field?.name] && (
            <XMarkIcon
              className=" h-4 w-4 absolute right-0 bg-white/90 rounded top-0 text-red-500 cursor-pointer hover:text-red-600 hover:bg-red-100
            "
              onClick={() => onChange("", field)}
            />
          )}
          <input
            key={field.name}
            type={field.subType || "text"}
            name={field.name}
            placeholder={!showFloatingLabel ? field.placeholder + (field.required ? " *" : "") : ""}
            list={field.options ? field.name : undefined}
            onFocus={onFocus}
            onBlur={onBlur}
            maxLength={field.maxLength}
            min={field.min}
            max={field.max}
            defaultValue={field.defaultValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") submitAction && submitAction();
            }}
            minLength={field.minLength}
            value={model[field?.name]}
            // defaultValue={field?.defaultValue || ""}
            disabled={disabled}
            className={` ${field.subType == "color" ? "" : "base-input "} ${errors[field.name] && "error-input "} ${field.className || ""}`}
            onInput={(e) => onChange(e, field)}
            step={field.step}
          />
          {field.options && (
            <datalist id={field.name}>
              {field.options.map((option) => {
                return <option key={option.value} value={option.value} />;
              })}
            </datalist>
          )}
        </>
      );
    case "textarea":
      return (
        <textarea
          name={field.name}
          value={model[field.name] || ""}
          onChange={(e) => onChange(e, field)}
          onKeyDown={(e) => {
            if (e.key === "Enter") submitAction && submitAction();
          }}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          className={`base-input ${errors[field.name] && "error-input"} ${field.className || ""}`}
          placeholder={!showFloatingLabel ? field.placeholder + (field.required ? " *" : "") : ""}
        />
      );

    case "select":
      return (
        <select
          name={field.name}
          value={model[field.name] || ""}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          className={`base-input ${errors[field.name] && "error-input"}`}
          onChange={(e) => onChange(e, field)}
        >
          {field.options &&
            field.options.map((option) => {
              return (
                <option key={option.value} value={option.value} disabled={option.disabled}>
                  {option.label}
                </option>
              );
            })}
        </select>
      );

    default:
      return null;
  }
};

export default Fields;
