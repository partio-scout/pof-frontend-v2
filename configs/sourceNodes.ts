import { SourceNodesArgs } from "gatsby";


const sourceNodes = async ({getNodesByType, actions}: SourceNodesArgs) => {
  const {touchNode} = actions;

  // touch nodes to ensure they aren't garbage collected
  getNodesByType('Navigation').forEach((node) => {
    console.log('Touching navigation node', node.id);
    touchNode(node)
  });
}

export default sourceNodes;