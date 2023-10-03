import React, { CSSProperties } from "react";
import FormGroup from "./FormGroup";
// import Button from "../Button/Button";

type Props = {
  fields: { label?: string; fields: FieldsType[] }[];
  model: any;
  setModel: (model: any) => void;
  loading?: boolean;
  onSubmit: (model: any) => void;
  className?: string;
  submitLabel?: string;
  cancelLabel?: string;
  onCancel?: () => void | null;
};

function Form({ fields, model, setModel, loading, onSubmit, className, cancelLabel, submitLabel, onCancel = () => {} }: Props) {
  const [startingModel, setStartingModel] = React.useState({} as any);
  const [errors, setErrors] = React.useState({} as any);

  React.useEffect(() => {
    //Set the default values
    if (model) setStartingModel(model);
  }, []);

  const onSubmitForm = () => {
    let error = false;
    let firstErrKey = "";

    // Check for errors - loopas through all field groupp and checks if fields within is empty
    for (const fieldGroup of fields) {
      for (const field of fieldGroup.fields) {
        if (field.required && !model[field.name]) {
          if (!firstErrKey) firstErrKey = field.name;
          setErrors((errors: any) => ({
            ...errors,
            [field.name]: (field.placeholder || field.label || field.name) + " is required",
          }));
          error = true;
        }
      }
    }

    //Scrolls to the first error
    if (error) return scrollError(firstErrKey);
    for (const key of Object.keys(errors)) {
      if (errors[key]) {
        return scrollError(key);
      }
    }

    onSubmit(model);
  };

  const scrollError = (id: string) => {
    const field = document.getElementById(id);
    setTimeout(() => {
      if (field) field.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <div
      className={` ${className} flex h-[85%] w-full flex-col overflow-y-auto px-1
    `}
    >
      {fields.map((field, i) => {
        return <FormGroup key={field.label || i} fields={field.fields} model={model} setModel={setModel} errors={errors} setErrors={setErrors} />;
      })}

      <div className="absolute bottom-2 left-7 flex ">
        <button className="mr-2" onClick={onSubmitForm}>
          {submitLabel || "Submit"}
        </button>
        {onCancel && <button onClick={onCancel}>{cancelLabel || "Cancel"}</button>}
      </div>
    </div>
  );
}

export default Form;

export type FieldsType = {
  name: string;
  label?: string;
  placeholder?: string;
  title?: string;
  labelStyle?: CSSProperties;
  type: "input" | "textarea" | "select" | "nativeSelect" | "checkbox" | "radio" | "date" | "custom" | "toggle" | "file";
  subType?:
    | "text"
    | "number"
    | "email"
    | "password"
    | "phone"
    | "url"
    | "file"
    | "color"
    | "range"
    | "time"
    | "week"
    | "month"
    | "datetime-local"
    | "hidden"
    | "search"
    | "toggle";
  options?: {
    disabled?: boolean;
    value: string;
    label: string;
  }[];
  required?: boolean;
  className?: string;
  minLength?: number;
  maxLength?: number;
  multiple?: boolean;
  max?: number;
  min?: number;
  autoFocus?: boolean;
  pattern?: string;
  step?: number;
  rows?: number;
  cols?: number;
  wrap?: string;
  autoComplete?: string;
  autoCorrect?: string;
  hidden?: any;
  disabled?: any;
  wrapperHorizontal?: any;
  labelClass?: string;
  autoCapitalize?: string;
  spellCheck?: string;
  description?: string;
  wrapperClassName?: string;
  defaultValue?: any;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (e: any) => void;
  onKeyPress?: (e: any) => void;
  onClick?: (e: any) => void;
  onDoubleClick?: (e: any) => void;
  onContextMenu?: (e: any) => void;
  onDrag?: (e: any) => void;
  onDragEnd?: (e: any) => void;
  onDragEnter?: (e: any) => void;
  onDragExit?: (e: any) => void;
  onDragLeave?: (e: any) => void;
  onDragOver?: (e: any) => void;
  onDragStart?: (e: any) => void;
  onDrop?: (e: any) => void;
  onMouseDown?: (e: any) => void;
  onMouseEnter?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
  onMouseMove?: (e: any) => void;
  onMouseOut?: (e: any) => void;
  onMouseOver?: (e: any) => void;
  onMouseUp?: (e: any) => void;
  onScroll?: (e: any) => void;
  onWheel?: (e: any) => void;
  onCopy?: (e: any) => void;
  onCut?: (e: any) => void;
  onPaste?: (e: any) => void;
  onCompositionEnd?: (e: any) => void;
  onCompositionStart?: (e: any) => void;
  onCompositionUpdate?: (e: any) => void;
  onSelect?: (e: any) => void;
  onInput?: (e: any) => void;
  onInvalid?: (e: any) => void;
  onSubmit?: (e: any) => void;
  onReset?: (e: any) => void;
  onToggle?: (e: any) => void;
  onToggleOff?: (e: any) => void;
  onToggleOn?: (e: any) => void;
  onToggleChange?: (e: any) => void;
  onToggleClick?: (e: any) => void;
  onToggleDoubleClick?: (e: any) => void;
  onToggleContextMenu?: (e: any) => void;
  onToggleDrag?: (e: any) => void;
  onToggleDragEnd?: (e: any) => void;
  onToggleDragEnter?: (e: any) => void;
  onToggleDragExit?: (e: any) => void;
  onToggleDragLeave?: (e: any) => void;
  onToggleDragOver?: (e: any) => void;
  onToggleDragStart?: (e: any) => void;
  onToggleDrop?: (e: any) => void;
  onToggleMouseDown?: (e: any) => void;
  onToggleMouseEnter?: (e: any) => void;
  onToggleMouseLeave?: (e: any) => void;
  onToggleMouseMove?: (e: any) => void;
  onToggleMouseOut?: (e: any) => void;
  onToggleMouseOver?: (e: any) => void;
  onToggleMouseUp?: (e: any) => void;
  onToggleScroll?: (e: any) => void;
  onToggleWheel?: (e: any) => void;
  onToggleCopy?: (e: any) => void;
  onToggleCut?: (e: any) => void;
  onTogglePaste?: (e: any) => void;
  onToggleCompositionEnd?: (e: any) => void;
  onToggleCompositionStart?: (e: any) => void;
  onToggleCompositionUpdate?: (e: any) => void;
  onToggleSelect?: (e: any) => void;
  onToggleInput?: (e: any) => void;
  onToggleInvalid?: (e: any) => void;
  onToggleSubmit?: (e: any) => void;
  onToggleReset?: (e: any) => void;
  onToggleFocus?: (e: any) => void;
  onToggleBlur?: (e: any) => void;
};
