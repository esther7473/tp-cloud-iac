import io
import json
import sys

# Comment for local testing
from fdk import response


def handler(ctx, data: io.BytesIO=None):

	if data == None:
		raise KeyError("No input, add more arguments")

	payload_bytes = data.getvalue()
	if payload_bytes == b'':
		raise KeyError("No keys in payload")

	payload = json.loads(payload_bytes)
	my_input = payload["my-input"]

	print("Successfully decoded my-input", my_input)

	return response.Response(
		ctx, 
		response_data=json.dumps({"my-output": my_input + my_input}),
		headers={"Content-Type": "application/json"}
	)

# Uncomment for local testing

# class response(object):
# 	@staticmethod
# 	def Response(ctx, response_data, headers):
# 		print("Response:", ctx, response_data, headers)

# if __name__ == "__main__":

# 	data = None
# 	ctx = None

# 	print("Inputs:", sys.argv)
# 	if len(sys.argv) >= 2:

# 		data = io.BytesIO(json.dumps({"my-input": sys.argv[1]}).encode())

# 	handler(ctx, data)
