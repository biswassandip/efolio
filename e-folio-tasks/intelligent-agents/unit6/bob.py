# bob.py

from kqml import KQMLModule
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
            # For simplicity, let's just echo the received expression
            response_content = {'result': kif_expression}
            reply_msg = self.reply_with_content(
                msg, 'SUCCESS', response_content)
            self.send(reply_msg)

        except KQMLException as e:
            error_msg = self.reply_with_content(
                msg, 'ERROR', {'reason': str(e)})
            self.send(error_msg)


if __name__ == "__main__":
    bob = Bob()
    bob.start()
