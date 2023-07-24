# FOL Representation
def is_item_available(item):
    store_inventory = ["apples", "bananas", "milk", "bread", "butter"]

    # Check if the item is available in the store
    return item in store_inventory


# Shopping List
shopping_list = ["apples", "milk", "bread", "eggs", "chicken"]

# Check if all items in the shopping list are available in the store
all_items_available = all(is_item_available(item) for item in shopping_list)

# Display the result
if all_items_available:
    print("All items are available in the store.")
else:
    print("Some items are not available in the store.")
