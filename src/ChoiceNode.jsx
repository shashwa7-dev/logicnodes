import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import styled from "styled-components";
import { mixins } from "./styles/global.styles";

export default function ChoiceNode({ data }) {
  const onChange = useCallback((evt) => {
    data.recordVal(evt.target.value);
  }, []);

  return (
    <ChoiceNodeCtr>
      <Handle type="target" position={Position.Top} id="a" />
      <p style={{ padding: ".25rem", borderBottom: "1px solid" }}>
        {data?.choiceLabel}
      </p>
      <form className="choices">
        <label>
          <span>Yes</span>
          <input type="radio" name="choice" value={1} onChange={onChange} />
        </label>
        <label>
          <span>No</span>
          <input type="radio" name="choice" value={0} onChange={onChange} />
        </label>
      </form>
      <Handle type="source" position={Position.Bottom} id="b" />
    </ChoiceNodeCtr>
  );
}

const ChoiceNodeCtr = styled.div`
  border: 1px solid;
  border-radius: 0.5rem;
  ${mixins.flexCol}
  background: #ffcd90;
  font-size: 0.9rem;
  .choices {
    ${mixins.flexRowCenter}
    padding: .5rem;
    gap: 0.5rem;
  }
  label {
    border: 1px solid;
    border-radius: 0.25rem;
    width: fit-content;
    padding: 0 0.25rem;
    ${mixins.flexRowCenter}
    gap:.25rem;
  }
`;
