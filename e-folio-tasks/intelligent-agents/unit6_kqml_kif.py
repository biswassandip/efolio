import json


class Bob:

    def __init__(self):
        self.sender = "bob"
        self.receiver = "alice"
        self.language = "KIF"
        self.message = {
            "sender": "bob",
            "language": "KIF",
            "content": "Hello, Alice!"
        }
        self.message["receiver"] = 1

    def process_message(self, message):
        print("Bob received a message from {}: {}".format(message["sender"],
                                                          message["content"]))

        if message["content"] == "available stock of 50 inch televisions":
            response = json.dumps({"available stock": 10})
        elif message["content"] == "number of HDMI slots":
            response = json.dumps({"number of HDMI slots": 3})
        else:
            response = json.dumps({"message": "I don't know"})

        bob.message = response

    def send_message(self):
        print("Bob sent a message to {}".format(self.message["receiver"]))


class Alice:

    def __init__(self):
        self.sender = "alice"
        self.receiver = "bob"
        self.language = "KIF"
        self.message = {
            "sender": "alice",
            "language": "KIF",
            "content": "Hello, Bob!"
        }
        self.message["receiver"] = 2

    def process_message(self, message):
        print("Alice received a message from {}: {}".format(message["sender"],
                                                            message["content"]))

        if message["content"] == "available stock of 50 inch televisions":
            alice.message = json.dumps(
                {"message": "There are 10 50 inch televisions in stock"})
        elif message["content"] == "number of HDMI slots":
            alice.message = json.dumps(
                {"message": "The 50 inch televisions have 3 HDMI slots"})
        else:
            alice.message = json.dumps({"message": "I don't know"})

    def send_message(self):
        print("Alice sent a message to {}".format(self.message["receiver"]))


if __name__ == "__main__":
    bob = Bob()
    alice = Alice()

    bob.process_message(bob.message)
    alice.process_message(alice.message)

    bob.send_message()
    alice.send_message()
