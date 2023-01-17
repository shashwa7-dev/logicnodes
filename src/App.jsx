import { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
// 👇 you need to import the reactflow styles
import "reactflow/dist/style.css";
import AddNumFunc from "./AddNums";
import TextUpdaterNode from "./TextNode";

function App() {
  const nodeTypes = useMemo(
    () => ({ textUpdater: TextUpdaterNode, addFunc: AddNumFunc }),
    []
  );
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);
  const updateNum1 = (num) => {
    setNum1(num);
  };
  const updateNum2 = (num) => {
    setNum2(num);
  };
  const updateTotal = useCallback(() => {
    setTotal(parseInt(num1) + parseInt(num2));
  }, [num1, num2]);
  const [initialNodes, setInitialNodes] = useState([
    // { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
    // { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
    {
      id: "1",
      type: "textUpdater",
      position: { x: 0, y: 100 },
      data: { value: num1, nodeName: "Number 1", updateNum: updateNum1 },
    },
    {
      id: "2",
      type: "textUpdater",
      position: { x: 200, y: 100 },
      data: { value: num2, nodeName: "Number 2", updateNum: updateNum2 },
    },
    {
      id: "3",
      type: "addFunc",
      position: { x: 100, y: 200 },
      data: { value: num1 + num2 },
    },
  ]);
  useEffect(() => {
    updateTotal();
    console.log("total", num1, num2, total);
  }, [updateTotal, total]);

  const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div>
      <h1>Hello</h1>
      <div className="flowChart" style={{ height: 800 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
}
export default App;
