# bob.py

from kqml import KQMLModule, KQMLPerformative
from kqml.kqml_exceptions import KQMLException


class Bob(KQMLModule):
    def __init__(self):
        super(Bob, self).__init__()
        self.add_supported_ontologies('KIF')
        self.subscribe_request('EVAL', self.on_eval)

    def on_eval(self, msg):
        try:
            content = msg.get('content')
            if not content:
                raise KQMLException('Missing content in EVAL message')

            kif_expression = content.get('expression')
            if not kif_expression:
                raise KQMLException('Missing expression in EVAL content')

            # Here, you can evaluate the KIF expression and prepare a response
            # For simplicity, let's just handle two specific queries

            if kif_expression == '(query-stock 50-inch-televisions)':
                # Replace 20 with actual stock
                response_content = {'result': '(available 20)'}
                reply_msg = self.reply_with_content(
                    msg, 'SUCCESS', response_content)
                self.send(reply_msg)

            elif kif_expression == '(query-hdmi-slots 50-inch-televisions)':
                # Replace 4 with actual number of HDMI slots
                response_content = {'result': '(slots 4)'}
                reply_msg = self.reply_with_content(
                    msg, 'SUCCESS', response_content)
                self.send(reply_msg)

            else:
                error_msg = self.reply_with_content(
                    msg, 'ERROR', {'reason': 'Unknown query'})
                self.send(error_msg)

        except KQMLException as e:
            error_msg = self.reply_with_content(
                msg, 'ERROR', {'reason': str(e)})
            self.send(error_msg)


if __name__ == "__main__":
    bob = Bob()
    bob.start()
