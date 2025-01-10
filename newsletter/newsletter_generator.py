from newsletter.graph.graph import get_graph
from newsletter.graph.state import WorkflowState, initialize_state


# Function to call API
def create_newsletter(topics: list[str], sources: list[str]):
    graph = get_graph()
    state = WorkflowState(initialize_state(topics=topics, sources=sources))
    res = graph.invoke(state, {"recursion_limit": 100})
    return res["newsletter_contents"][-1]


import sys
import os
from newsletter.graph.parse import get_unique_filename

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python newsletter.py <topic> [source]")
        sys.exit(1)

    topic = sys.argv[1]
    source = ""
    if len(sys.argv) > 2:
        source = sys.argv[2]

    newsletter_content = create_newsletter([topic], [source])

    print("--------------------------------------")
    print(newsletter_content)
    current_directory = os.getcwd()
    filename = get_unique_filename(f"{current_directory}/output", "newsletter")

    with open(filename, "w", encoding="utf-8") as f:
        f.write(newsletter_content)
