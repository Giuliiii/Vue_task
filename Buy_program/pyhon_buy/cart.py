from item_manager import show_items

class Cart:
    from ownable import set_owner
    show_items = show_items

    def __init__(self, owner):
        self.set_owner(owner)
        self.items = []

    def items_list(self):
        return self.items

    def add(self, item):
        self.items.append(item)

    def total_amount(self):
        price_list = [item.price for item in self.items]
        return sum(price_list)

    def check_out(self):
        if self.owner.wallet.balance < self.total_amount():
            print("Insufficient balance!")
            return

        for item in self.items:
            self.owner.wallet.withdraw(item.price)
            item.owner.wallet.deposit(item.price)
            item.owner = self.owner

        self.items = []