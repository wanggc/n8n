import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

export class DeleteExecution implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Delete Execution',
		name: 'deleteExecution',
		icon: 'fa:trash',
		group: ['organization'],
		version: 1,
		description: 'Delete Execution',
		defaults: {
			name: 'Delete workflow execution record',
			color: '#b0b0b0',
		},
		inputs: ['main'],
		outputs: ['main'],
		properties: [],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const context = this.getWorkflowDataProxy(0);
		context.$execution.customData.setDeleteExecution(true);
		return [items];
	}
}
