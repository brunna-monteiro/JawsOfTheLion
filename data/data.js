import Game from '../models/game'
import Scenario from '../models/scenario'
import Item from '../models/item'
import Event from '../models/event'
import Player from '../models/player'

export const GAMES = [
  new Game('g1', 'First Campaign', 'Matheus & Brunna'),
  new Game('g2', 'Bouldering Bros', 'Matheus, Brunna, Lukas, Johanna'),
]

export const SCENARIOS = [
  new Scenario(
    's1',
    ['g1', 'g2'],
    'Roadside Ambush (B1)',
    'https://gloomhaven.fandom.com/wiki/Roadside_Ambush?file=JotL_sc1_RA_map.jpg',
    [
      'Kill all enemies'
    ]
  ),
  new Scenario(
    's2',
    ['g1', 'g2'],
    'A Hole in the Wall (B1)',
    'https://tabletopbellhop.com/wp-content/uploads/2020/08/Jaws-of-the-Lion-Scenario-2.jpg',
    [
      'Kill all enemies'
    ]
  ),
  new Scenario(
    's3',
    [],
    'Teste scenario',
    'https://tabletopbellhop.com/wp-content/uploads/2020/08/Jaws-of-the-Lion-Scenario-2.jpg',
    [
      'Mata geral'
    ]
  ),
]

export const ITEMS = [
  new Item(
    'i1',
    ['g1', 'g2'],
    'Eagle-Eye Goggles',
    'https://raw.githubusercontent.com/cmlenius/gloomhaven-card-browser/images/images/items/jaws-of-the-lion/jotl-01-eagle-eye-goggles.jpeg',
    true,
    true
  ),
  new Item(
    'i2',
    ['g1', 'g2'],
    'Iron Helmet',
    'https://raw.githubusercontent.com/cmlenius/gloomhaven-card-browser/images/images/items/jaws-of-the-lion/jotl-02-iron-helmet.jpeg',
    false,
    true
  ),
  new Item(
    'i3',
    ['g1', 'g2'],
    'Chain Armor',
    'https://raw.githubusercontent.com/cmlenius/gloomhaven-card-browser/images/images/items/jaws-of-the-lion/jotl-03-chain-armor.jpeg',
    false,
    true
  ),
]

export const EVENTS = [
  new Event(
    '1',
    ['g1'],
    true
  ),
  new Event(
    '2',
    [],
    false
  ),
  new Event(
    '3',
    ['g2'],
    true
  ),
  new Event(
    '4',
    [],
    false
  ),
  new Event(
    '5',
    [],
    false
  ),
  new Event(
    '6',
    ['g2'],
    true
  ),
  new Event(
    '7',
    ['g1'],
    true
  ),
  new Event(
    '8',
    ['g2'],
    true
  ),
  new Event(
    '9',
    [],
    false
  ),
  new Event(
    '10',
    ['g2'],
    true
  ),
  new Event(
    '11',
    ['g2'],
    true
  ),
  new Event(
    '12',
    ['g2'],
    true
  ),
  new Event(
    '13',
    [],
    false
  ),
  new Event(
    '14',
    [],
    false
  ),
  new Event(
    '15',
    ['g2'],
    true
  ),
  new Event(
    '16',
    ['g2'],
    true
  ),
  new Event(
    '17',
    ['g1'],
    true
  ),
  new Event(
    '18',
    ['g1'],
    true
  ),
  new Event(
    '19',
    [],
    false
  ),
  new Event(
    '20',
    [],
    false
  ),
  new Event(
    '21',
    ['g2'],
    true
  ),
]

export const PLAYERS = [
  new Player(
    'p1',
    ['g1'],
    'Gorg',
    'Matheus',
    'Inox Hatchet'
  ),
  new Player(
    'p2',
    ['g1'],
    'Jena',
    'Brunna',
    'Quatryl Demolitionist'
  ),
  new Player(
    'p3',
    ['g2'],
    'Lynus, the lumberjack',
    'Brunna',
    'Inox Hatchet'
  ),
  new Player(
    'p4',
    ['g2'],
    'Varka',
    'Matheus',
    'Valrath Red Guard'
  ),
  new Player(
    'p5',
    ['g2'],
    'Moly',
    'Johanna',
    'Quatryl Demolitionist'
  ),
  new Player(
    'p6',
    ['g2'],
    'Null',
    'Lukas',
    'Human Voidwarden'
  ),
]
