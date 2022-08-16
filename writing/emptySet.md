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


### Truly Contradictory (Vacuous Logic)

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

Statements about the empty set are also conditional, but more subtle.
If p is false, we call the conditional statement *vacuously true*.
When we say 'There exists an x in ∅ such that f(x)=0',
we have a vacuous truth.
Because there are no elements in ∅, x does not exist. 
The same argument applies to statement which begin with
'for all x in ∅'. 

Vacuous truths allow the empty set to have some interesting properties.
In our story, this meant that the museum could truthfully say both the mundane, *The items inside are all apples*,
and the impossible, *Collection of the World's Unicorns*. 

Strangely, it also allows us to say the opposite,
*The items inside are all not apples*, and still be true.
We could even say that *The items inside are all apples and not apples*!

Since any statement we make is vacuously true,
the conclusion can be anything, even contradictory or impossible.
For this reason we need to take care to not accidently study the empty set. 

Imagine we want to study integers which have two properties,
being prime and being square.
Since squares cannot be prime, the set will be empty.
We could then–without realizing we are discussing nothing–logically
imply any number of additional conditions. 
This would be a useless and time-wasting endeavour.

Proving that the properties are contradictory can be extremely challenging at times, 
especially if the properties appear unrelated.
The best way to avoid this is to always have an example to study.
This will guarantee that your set is non-empty.

----

The moral of this story is that if a somebody approaches you making a collection of grandiose promises,
remember that it may just be empty.
