import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import styled from "styled-components";
import { mixins } from "./styles/global.styles";

const handleStyle = { left: 10 };

export default function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    data.recordVal(evt.target.value);
  }, []);

  return (
    <TextNodeCtr>
      <Handle type="target" position={Position.Top} id="a" />
      <p style={{ padding: ".25rem", borderBottom: "1px solid" }}>
        Welcome Mssg
      </p>
      <div style={{ padding: ".5rem" }}>
        <input
          id="text"
          name="text"
          defaultValue={data?.value}
          onChange={onChange}
          placeholder={data?.nodeName}
        />
      </div>
      <Handle type="source" position={Position.Bottom} id="b" />
    </TextNodeCtr>
  );
}

const TextNodeCtr = styled.div`
  border: 1px solid;
  border-radius: 0.5rem;
  ${mixins.flexCol}
  background: #90b5ff;
  font-size: 0.9rem;
`;
