# The most unique collection

C: Hurry! You are going to miss it!

A: Miss what? Who are–

C: Quickly! You must see my collection. Come visit my museum!

A: ...your museum?

C: It's quite unique. Have you ever heard of the Louvre?

A: Why of course, it's famous. The world's greatest art is housed there.

C: Well, every work of art in my museum is more famous than those at the Louvre.

A: Art more famous than Greek statues? –more famous than the Mona Lisa?

C: My collection is extremely unique–no museum on earth shares an item in common.

Impossible. How have you never heard of this place?

You approach a small building–no, a shack.
This can't possibly be right.
You begin to make out the words on the thin plaque hanging to the side of the door:
*Cantor's Collection*.

Your curious guide flips the plaque to now read *All the items inside are apples*.

A: Apples? This isn't what you promised!

C: Oh I'm terribly sorry, just a moment.

The stranger flips the sign back again,
except it now reads *Each animal inside is a giraffe*.

Your guide is frustrated. Again and again the sign is turned over:
*Every Picasso Within is an Original*, *Collection of the World's Unicorns*, *Every Tweet from Abraham Lincoln*....

------
### Nothing is confusing

The empty set, often written as ∅, is a mathematical object which may confuse students who first learn about it.
This confusion seems to stem from two principal components
1. The nature of sets and how we talk about them
1. The logic behind statements involving the empty set

Some of these curious qualities are displayed in the above absurd story. 
This post hopes to clarify and explain the unique properties of ∅.

### It's all about content

Set theory at its heart is a branch of logic.
The study of sets allows us to make sweeping statements without having to write each proof individually.
This gives set theory a great deal of power–its our responsibility to learn how to use it.

While not typically being taught until university,
set theory is essential to–and often used as the foundation of–mathematics.
Using sets we can construct the natural numbers,
define relations, and map functions.
We can even categorize different infinities!

Simply defined, a set is a collection of objects,
which we call 'elements.'
Sets can be finite like a set of rare pennies in a coin collection.
Sets can be infinite like the set of real numbers or the set of primes. 

One reason sets can initially be confusing is how we talk about them–which most of the time we aren't.
Rather, we discuss the contents of the set.
For example, 'rare pennies' is not a property of your collection–
it's a property of the objects in your collection.
Similarly, the set of primes is not itelf 'prime'–but the elements inside are.

Mathematicians frame their statements to emphasize the elements of a set.

    - ∀x ∈ T (For all x in T), x has a special property 
    - ∃x ∈ S (There exists an x in S) such that f(x)=0
    - S ⊆ T (S is a subset of T, so all the elements of S are in T)

Using this notation we can quickly define, construct, or prove multiple things simultaneously.


### Nothing is True (Vacuous logic)

If there is nothing in the set, we call it empty.
As illustrated above, the empty set is like a museum with no contents.
So, what does it mean to talk about its contents?

First, let's discuss the logic of conditional statements, p ⇒ q. 
If p is satisfied, then q is implied to be true.
For example, let's analyze the following statement:
if today is Sunday, then football will be on TV.

    - When both p (today is Sunday) and q (football will be on TV) are true, the conditional statement is true.
    - If there is no football and today is Sunday, then the statement is false.
    - If it's not Sunday and there is no football on TV then the statement is true.

But what if there is football on TV and today is not Sunday? 
Well our conditional statement never claimed that football is *only* televised on Sundays.
There isn't evidence that statement has been violated, which means our conditional is still true.

This is summarized in the following truth table:

| p        | q         | p → q  |
|----------|-----------|--------|
| True     |      True |   True |
|     True |     False |  False |
|    False |      True |   True |
| False    |     False |   True |

If p is false, we call the conditional statement *vacuously true*. 
Statements about the empty set are also conditional, but more subtle.
When we say 'There exists an x in ∅ such that f(x)=0', we have a vacuous truth.
This is because x does not exist and there are no elements in ∅. 
The same argument applies to statement which begin with 'For all x in ∅'.

These vacuous statements can be mundane,
*The items inside are all apples*,
or impossible, *Collection of the World's Unicorns*.
Each are true because t.

-----

When we talk about interesting properties of the empty set,
we are most commonly referring to its contents.
The empty set itself, like all other sets, is a container.
It's the elements within the set that everyone is concerned about.
Like the museum above, and like other museums,
you aren't there for the museum.
You are there for what the museum holds-
the pottery, paintings, and statues.
Those art pieces have certain *properties*,
typically an astronomical price value,
that tie them all together.

As illustrated above, the empty set is like a museum with no contents.
Because there are no contents,
any statement you make about the elements of the empty set is vacuously true.
These statements can be mundane,
*The items inside are all apples*,
or impossible, *Collection of the World's Unicorns*.
Each are true.

Perhaps another explanation.
As a kid I had a coin collection;
coins of different values and from different eras.
If I removed one coin,
I would still have a coin collection.
If I were to repeat this action,
continually removing coins,
I could still call my collection a coin collection.
If every element within a set has the same properties,
removing one will not invalidate the statement about the collection.
Even when I remove the last coin,
my collection -- an empty set - is still a coin collection.
This thought process could be repeated with any collection of items
-- and each statement would still be true.


The second is written notationally as

    - ∀x ∈ S, x has a special property.
    - ∃x ∈ S, x has a special property.
    - For all x in S, x has a special property.
    - There exists an x in S where x has a special property

This distinction is important because everyday language works differently.
Instead of phrases like

    - 
    - Swans can be black
    - 
