from wallet import Wallet
from item_manager import show_items, items_list, pick_items

class User:
    show_items = show_items
    items_list = items_list
    pick_items = pick_items

    def __init__(self, name):
        self.name = name
        self.wallet = Wallet(self)