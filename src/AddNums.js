import { Handle, Position } from "reactflow";

export default function AddNumFunc({ data }) {
  console.log("output data", data);
  return (
    <>
      <div>
        <Handle type="target" position={Position.Top} />
        <input id="text" name="text" disabled value={data?.value ?? 0} />
      </div>
    </>
  );
}
