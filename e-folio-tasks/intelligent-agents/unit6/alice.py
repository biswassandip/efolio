# alice.py

from kqml import KQMLModule, KQMLPerformative


class Alice(KQMLModule):
    def __init__(self):
        super(Alice, self).__init__()

    def send_eval_request_to_bob(self, kif_expression):
        content = {'expression': kif_expression}
        performative = KQMLPerformative('EVAL', content)
        msg = self.build_message('bob', performative)
        self.send(msg)

    def receive_response_from_bob(self, msg):
        content = msg.get('content')
        if not content:
            print("Received an empty response from Bob.")
            return

        result = content.get('result')
        if not result:
            print("Received an empty result from Bob.")
            return

        print("Bob's response:", result)


if __name__ == "__main__":
    alice = Alice()
    alice.start()

    # Alice asks about the available stock of 50-inch televisions
    alice.send_eval_request_to_bob('(query-stock 50-inch-televisions)')

    # Alice asks about the number of HDMI slots for 50-inch televisions
    alice.send_eval_request_to_bob('(query-hdmi-slots 50-inch-televisions)')
