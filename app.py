from flask import Flask, jsonify, request
from db import orders_db

app = Flask(__name__)


@app.route('/orderss', methods=["POST"])
def get_orders():
    data = request.get_json()  # Parse incoming JSON data
    if data is None:
        return jsonify({"error": "Invalid JSON"}), 400
    
    if "orderNumber" not in data:
        return jsonify({"error": "Missing orderNumber"}), 400
    
    order_number = data["orderNumber"]

    # Search in simulated database
    if order_number in orders_db:
        order = orders_db.get(order_number)
         # Return order data as JSON
        return jsonify({
            "order_number": order.order_number,
            "customer_name": order.customer_name,
            "order_date": order.order_date,
            "total_amount": order.total_amount,
            "status": order.status,
            "shipping_address": order.shipping_address
        })
    # Return error if not found
    return jsonify({"error": "Order not found"}), 404

# Running the data in flask
if __name__ == "__main__":
    app.run(debug=True)