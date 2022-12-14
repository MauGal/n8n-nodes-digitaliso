/* eslint-disable n8n-nodes-base/cred-class-field-properties-assertion */
import {
	ICredentialDataDecryptedObject,
	ICredentialTestRequest,
	ICredentialType,
	IHttpRequestOptions,
	NodePropertyTypes,
} from 'n8n-workflow';

export class DigitalisoApi implements ICredentialType {
	name = 'digitalisoApi';
	displayName = 'Digitaliso API';
	// eslint-disable-next-line n8n-nodes-base/cred-class-field-documentation-url-not-http-url
	documentationUrl = 'digitaliso';
	properties = [
		{
			displayName: 'Company',
			name: 'company',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
	];

	async authenticate(credentials: ICredentialDataDecryptedObject, requestOptions: IHttpRequestOptions): Promise<IHttpRequestOptions> {
		requestOptions.headers = {
			'Content-Type': 'application/json',
		};
		
		requestOptions.body = {
			'api_key': credentials.apiKey,
			'company': credentials.company,
		};

		return requestOptions;
	}


	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.qsa.net',
			url: '/v1/user/login/',
			method: 'POST',
		},
	};
}
