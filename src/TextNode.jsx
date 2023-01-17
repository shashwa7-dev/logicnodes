import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

export default function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    data.updateNum(evt.target.value);
  }, []);

  return (
    <>
      <div>
        <input
          id="text"
          name="text"
          defaultValue={data?.value ?? 0}
          onChange={onChange}
          placeholder={data?.nodeName}
        />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}
