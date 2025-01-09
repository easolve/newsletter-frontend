from langchain_openai import ChatOpenAI
from newsletter.graph.state import WorkflowState
from newsletter.prompts import CREATOR_PROMPT, POST_1, POST_2, POST_3


llm = ChatOpenAI(model="gpt-4o-mini")


def _make_prompt_vars(state: WorkflowState) -> dict:
    original_content = ""
    for i, content in enumerate(state["newsletter_contents"]):
        original_content += f"PREV_CREATED_NEWS_LETTERS_{i + 1}:\n{content}\n"

    for i, content in enumerate(state["summary_contents"]):
        original_content += f"ORIGINAL_CONTENT_{i + 1}:\n{content}\n"

    example = f"""
EXAMPLE:
{POST_1}
"""

    """
...
EXAMPLE_2:
{POST_2}

EXAMPLE_3:
{POST_3}
"""

    intent_of_requested_content = state["intent_of_requested_content"]

    return {
        "original_content": original_content,
        "example": example,
        "intent_of_requested_content": intent_of_requested_content,
    }


def creator_node(state: WorkflowState):
    vars = _make_prompt_vars(state)
    prompt = CREATOR_PROMPT.format(**vars)

    response = llm.invoke(prompt)
    if isinstance(response.content, list):
        content_str = "".join(map(str, response.content))
    else:
        content_str = response.content
    print("====================creator_node====================")
    print(content_str)

    state["newsletter_contents"].append(content_str)
    return {"newsletter_content": state["newsletter_contents"], "summary_contents": []}
